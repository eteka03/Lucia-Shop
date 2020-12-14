import React from "react";
import { useStripe } from "@stripe/react-stripe-js";

export const PaymentForm = () => {
  const stripe = useStripe();
  return (
    <div>
      <button onClick={async () => await stripe.redirectToCheckout({})}>
        pay
      </button>
    </div>
  );
};

export default PaymentForm;
