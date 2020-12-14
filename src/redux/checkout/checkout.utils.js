import { loadStripe } from "@stripe/stripe-js";
import { INITIALIZE_STRIPE } from "../actionTypes";
import { initializeStripe, setLoading } from "./checkout.actions";

export const fetchKey = (publicKey) => {
  return async (dispatch, getState) => {
    const stripeObject = await loadStripe(publicKey);
    dispatch(setLoading(true));
    dispatch({ type: INITIALIZE_STRIPE, payload: stripeObject });
    dispatch(setLoading(false));
  };
};
