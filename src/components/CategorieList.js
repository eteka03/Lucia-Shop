import React from "react";
import Categorie from "./Categorie";

const fakeCategorieData = [
  {
    id: 1,
    titre: "femme",
    imageUrl: "https://source.unsplash.com/random/400x600?sig=1",
    lienCategorie: "/",
  },
  {
    id: 2,
    titre: "homme",
    imageUrl: "https://source.unsplash.com/random/400x600?sig=2",
    lienCategorie: "/",
    size: "small",
  },
  {
    id: 3,
    titre: "enfant",
    imageUrl: "https://source.unsplash.com/random/400x600?sig=3",
    lienCategorie: "/",
    size: "small",
  },
  {
    id: 4,
    titre: "chaussures",
    imageUrl: "https://source.unsplash.com/random/400x600?sig=4",
    lienCategorie: "/",
    size: "small",
  },
  {
    id: 5,
    titre: "Pantalons",
    imageUrl: "https://source.unsplash.com/random/400x600?sig=5",
    lienCategorie: "/",
    size: "medium",
  },
  {
    id: 6,
    titre: "Accessoires",
    imageUrl: "https://source.unsplash.com/random/400x600?sig=6",
    lienCategorie: "/",
    size: "medium",
  },
];

class CategorieList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: fakeCategorieData,
    };
  }

  render() {
    return (
      <div className="categorie_container conteneur_large row">
        {this.state.categories.map((cat) => (
          <Categorie key={cat.id} {...cat} />
        ))}
      </div>
    );
  }
}

export default CategorieList;