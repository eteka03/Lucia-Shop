const { INITIALIZE_STRIPE, SET_ERROR, SET_LOADING } = require("../actionTypes");

const initialState = {
  isLoading: false,
  stripe: null,
  error: null,
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_STRIPE:
      return { ...state, stripe: { ...action.payload } };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
