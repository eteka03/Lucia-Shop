import React, { useEffect, useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../components/checkout-item";
import { selectCartItems, selectCarTotal } from "../redux/cart/cart.selectors";
import { setStripeSelector } from "../redux/checkout/checkout.selectors";
import "../styles/pages/checkout.scss";
import { fetchKey } from "../redux/checkout/checkout.utils";
import { setError, setLoading } from "../redux/checkout/checkout.actions";
import CustomButton from "../components/CustomButton";
import { formatPrice, formatTotalPrice } from "../app.utils";

const PageCheckout = ({ isLoading, err, stripe, cartItems, cartTotal }) => {
  const dispatch = useDispatch();

  function setStripeObject() {
    dispatch(fetchKey(`${process.env.REACT_APP_STRIPE}`));
  }
  useEffect(setStripeObject, []);

  const handleCheckout = async (e) => {
    //redirect to stripe checkout on button click
    const { error } = await stripe.stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: "price_1HyKAZGDpVslPFA8XKWwDckx", quantity: 1 },
      ],
      mode: "payment",
      successUrl: "https://github.com/eteka03",
      cancelUrl: "https://www.google.ca/",
    });

    if (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

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
            <tr>
              <td className="pay">
                <CustomButton onClick={handleCheckout}>
                  Pay {formatTotalPrice(cartTotal, "CAD")}
                </CustomButton>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>

      <div style={{ color: "red", marginTop: "30px" }}>
        <h3>*Please use this credit card to test payments*</h3>
        <br />
        Number : 4242424242424242
        <br />
        Exp : 01/23
        <br />
        CVV: 123
      </div>
      <div>{isLoading && <h3>chargement ...</h3>}</div>

      <div>{err ? <h3>{err}</h3> : null}</div>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCarTotal,
    stripe: setStripeSelector,
    isLoading: (state) => state.checkout.isLoading,
    err: (state) => state.checkout.error,
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
