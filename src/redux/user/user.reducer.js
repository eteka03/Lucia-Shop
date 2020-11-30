const { default: Signin } = require("../../components/Signin");

const INTIAL_STATE = {
  currentUser: {},
};

export const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
