import { createSelector } from "reselect";
import { formatPrice } from "../../app.utils";
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total_quantity, cartItem) => total_quantity + cartItem.quantity,
      0
    )
);

export const selectCarTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce(
    (total_quantity, cartItem) =>
      total_quantity + cartItem.quantity * cartItem.price,
    0
  );
});
