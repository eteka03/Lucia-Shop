import {
  addItemTocart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from "./cart.utils";

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} = require("../actionTypes");

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
