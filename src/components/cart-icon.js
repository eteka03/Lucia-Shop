import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../assets/svg/shopping-bag.svg";
import { toggleCart } from "../redux/cart/cart.action";
import "../styles/components/cart-icon.scss";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
