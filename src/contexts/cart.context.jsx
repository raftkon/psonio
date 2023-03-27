import { createContext, useEffect, useState } from "react";

// helper functions
const addCartItemHelper = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseCartItemHelper = (cartItems, productToDecrease) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );

  if (existingItem.quantity === 1) {
    return removeCartItemHelper(cartItems, existingItem);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === existingItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItemHelper = (cartItems, productToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  return cartItems.filter((cartItem) => cartItem.id !== existingItem.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addCartItem = (productToAdd) => {
    setCartItems(addCartItemHelper(cartItems, productToAdd));
  };

  const decreaseCartItem = (productToDecrease) => {
    setCartItems(decreaseCartItemHelper(cartItems, productToDecrease));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(removeCartItemHelper(cartItems, productToRemove));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    addCartItem,
    decreaseCartItem,
    removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
