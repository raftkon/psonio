import { createContext, useEffect, useReducer, useState } from "react";

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

export const CART_TYPES_ACTIONS = {
  TOGGLE_CART: "TOGGLE_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case CART_TYPES_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      throw new Error(`unhandled type of ${type} in CartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, cartTotal, cartCount, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    dispatch({
      type: CART_TYPES_ACTIONS.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const setIsCartOpen = () => {
    dispatch({ type: CART_TYPES_ACTIONS.TOGGLE_CART, payload: null });
  };

  const addCartItem = (productToAdd) => {
    updateCartItemsReducer(addCartItemHelper(cartItems, productToAdd));
  };

  const decreaseCartItem = (productToDecrease) => {
    updateCartItemsReducer(
      decreaseCartItemHelper(cartItems, productToDecrease)
    );
  };

  const removeCartItem = (productToRemove) => {
    updateCartItemsReducer(removeCartItemHelper(cartItems, productToRemove));
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
