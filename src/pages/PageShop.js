import React from "react";
import Collection from "../components/Collection";
import "../styles/pages/shop.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../redux/shop/shop.selectors";

const PageShop = ({ collections }) => {
  return (
    <div className="page_shop conteneur_large container-fluid">
      <h1 className="text-capitalize titre">Collections</h1>
      <div className="shop_list">
        {collections.map((collection) => {
          return <Collection key={collection.id} {...collection} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps, null)(PageShop);
