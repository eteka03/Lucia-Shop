import { ADD_ITEM, TOGGLE_CART_HIDDEN } from "../actionTypes";

export const toggleCart = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
