import SHOP_DATA from "../../datas/shop.data";

const initial_state = {
  sections: [
    {
      id: 1,
      titre: "femme",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=1",
      lienCategorie: "/",
      lienUrl: "femme",
    },
    {
      id: 2,
      titre: "homme",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=2",
      lienCategorie: "/",
      size: "small",
      lienUrl: "homme",
    },
    {
      id: 3,
      titre: "enfant",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=3",
      lienCategorie: "/",
      size: "small",
      lienUrl: "enfant",
    },
    {
      id: 4,
      titre: "chaussures",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=4",
      lienCategorie: "/",
      size: "small",
      lienUrl: "chaussure",
    },
    {
      id: 5,
      titre: "Pantalons",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=5",
      lienCategorie: "/",
      size: "medium",
      lienUrl: "pantalons",
    },
    {
      id: 6,
      titre: "Accessoires",
      imageUrl: "https://source.unsplash.com/random/400x600?sig=6",
      lienCategorie: "/",
      size: "medium",
      lienUrl: "accessoires",
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
