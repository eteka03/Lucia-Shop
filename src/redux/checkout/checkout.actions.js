export const initializeStripe = (stripeObject) => ({
  type: "INITIALIZE_STRIPE",
  payload: stripeObject,
});

export const setError = (err) => ({
  type: "SET_ERROR",
  payload: err,
});

export const setLoading = (loadingState) => ({
  type: "SET_LOADING",
  payload: loadingState,
});
