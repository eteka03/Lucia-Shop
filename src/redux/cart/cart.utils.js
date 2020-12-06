export const addItemTocart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const calculItemPrice = (price) => {
  //creation du format du prix
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "CAD",
  });

  return formatter.format(price);
};
