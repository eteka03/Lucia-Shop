import React from "react";
import CustomButton from "./CustomButton";
import "../styles/components/cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./Cart-item";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={CartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, null)(CartDropdown);
