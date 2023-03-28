import { createSlice } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    toggleIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addCartItem: (state, action) => {
      state.cartItems = addCartItemHelper(state.cartItems, action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartItems = removeCartItemHelper(state.cartItems, action.payload);
    },
    decreaseCartItem: (state, action) => {
      state.cartItems = decreaseCartItemHelper(state.cartItems, action.payload);
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  decreaseCartItem,
  toggleIsCartOpen,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// --------helper functions------- //

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
