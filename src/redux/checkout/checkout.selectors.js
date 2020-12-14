import { createSelector } from "reselect";

const stripeSelector = (state) => state.checkout;

export const setStripeSelector = createSelector(
  [stripeSelector],
  (stripe) => stripe
);
