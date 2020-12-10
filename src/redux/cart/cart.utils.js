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

export const removeItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const decreaseItemQuantity = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== existingCartItem.id
      );
    } else {
      return cartItems.map((cartItem) =>
        cartItem.id === existingCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  }
};

export const increaseItemQuantity = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  console.log(existingCartItem);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};
