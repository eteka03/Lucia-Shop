import { addItemTocart } from "./cart.utils";

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = require("../actionTypes");

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

    default:
      return state;
  }
};
