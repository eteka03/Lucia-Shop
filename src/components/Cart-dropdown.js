import React from "react";
import CustomButton from "./CustomButton";
import "../styles/components/cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./Cart-item";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router";
import { toggleCart } from "../redux/cart/cart.action";

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
        disabled={cartItems.length > 0 ? false : true}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
