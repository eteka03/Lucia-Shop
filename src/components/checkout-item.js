import React from "react";
import { connect } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/cart/cart.action";
import { decreaseItemQuantity } from "../redux/cart/cart.utils";
import "../styles/components/checkout-item.scss";

const CheckoutItem = ({ item, removeItem, addItemQty, decreaseItemQty }) => {
  const { id, imageUrl, name, quantity, price } = item;
  return (
    <tr key={id}>
      <td>
        <img alt="item" src={imageUrl} />
      </td>
      <td>{name}</td>
      <td>
        <span className="arrow-left" onClick={() => decreaseItemQty(item)}>
          &#10094;
        </span>
        <span className="quantity">{quantity}</span>
        <span className="arrow-right" onClick={() => addItemQty(item)}>
          &#10095;
        </span>
      </td>
      <td>{price}</td>
      <td className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </td>
    </tr>
  );
};

CheckoutItem.defaultProps = {
  imageUrl: "./logo512.png",
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItemQty: (item) => dispatch(decreaseQuantity(item)),
  addItemQty: (item) => dispatch(increaseQuantity(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
