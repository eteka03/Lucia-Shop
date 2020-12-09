import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { createStructuredSelector } from "reselect";
import CartItem from "../components/Cart-item";
import CheckoutItem from "../components/checkout-item";
import { selectCartItems, selectCarTotal } from "../redux/cart/cart.selectors";
import "../styles/pages/checkout.scss";

const PageCheckout = ({ cartItems, cartTotal }) => {
  return (
    <div className="page_checkout conteneur_large container-fluid">
      <div className="product_listing">
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => {
              return <CheckoutItem key={cartItem.id} item={cartItem} />;
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3" className="total title">
                total :
              </th>
              <td className="total price">{cartTotal}</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCarTotal,
});

/*const mapDispatchToProps = dispatch => ({
    removeItem: removeItem(dispatch(item))
})*/
PageCheckout.defaultProps = {
  cartItem: {
    description: "",
  },
};
export default connect(mapStateToProps, null)(PageCheckout);
