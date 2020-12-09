import {
  ADD_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
} from "../actionTypes";

export const toggleCart = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseQuantity = (item) => ({
  type: DECREASE_QUANTITY,
  payload: item,
});

export const increaseQuantity = (item) => ({
  type: INCREASE_QUANTITY,
  payload: item,
});
