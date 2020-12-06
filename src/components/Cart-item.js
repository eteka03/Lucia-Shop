import React from "react";
import { calculItemPrice } from "../redux/cart/cart.utils";
import "../styles/components/cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {calculItemPrice(price)}
        </span>
      </div>
    </div>
  );
};

CartItem.defaultProps = {};
export default CartItem;
