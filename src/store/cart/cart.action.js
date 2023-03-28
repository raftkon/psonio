import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

// actions
export const toggleCart = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, null);

export const addCartItem = (cartItems, productToAdd) => {
  const newCartItems = addCartItemHelper(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseCartItem = (cartItems, productToDecrease) => {
  const newCartItems = decreaseCartItemHelper(cartItems, productToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = removeCartItemHelper(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
