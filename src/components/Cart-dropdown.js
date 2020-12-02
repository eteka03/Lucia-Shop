import React from "react";
import CustomButton from "./CustomButton";
import "../styles/components/cart-dropdown.scss";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};
