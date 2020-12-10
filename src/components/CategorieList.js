import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Categorie from "./Categorie";
import { selectShopSections } from "../redux/shop/shop.selectors";

const CategorieList = ({ sections }) => {
  return (
    <div className="categorie_container conteneur_large row">
      {sections.map((cat) => (
        <Categorie key={cat.id} {...cat} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectShopSections,
});

export default connect(mapStateToProps, null)(CategorieList);
