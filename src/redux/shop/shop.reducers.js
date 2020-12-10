import SHOP_DATA from "../../datas/shop.data";

const initial_state = {
  sections: [
    {
      id: 1,
      titre: "hats",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=1",

      lienUrl: "shop/hats",
    },
    {
      id: 2,
      titre: "men",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=2",

      size: "small",
      lienUrl: "shop/men",
    },
    {
      id: 3,
      titre: "womens",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=3",

      size: "small",
      lienUrl: "shop/womens",
    },
    {
      id: 4,
      titre: "sneakers",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=4",

      size: "small",
      lienUrl: "shop/sneakers",
    },
    {
      id: 5,
      titre: "pants",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=5",

      size: "medium",
      lienUrl: "shop/pants",
    },
    {
      id: 6,
      titre: "jackets",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=6",

      size: "medium",
      lienUrl: "shop/jackets",
    },
  ],
  collections: SHOP_DATA,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
