import SHOP_DATA from "../../datas/shop.data";
import { SET_COLLECTIONS, SET_COLLECTIONS_AND_ITEMS } from "../actionTypes";

const initial_state = {
  sections: [],
  collections: [],
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_COLLECTIONS:
      return { ...state, sections: [...action.payload] };
    case SET_COLLECTIONS_AND_ITEMS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
