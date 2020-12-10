import React from "react";
import Collection from "../components/Collection";
import "../styles/pages/shop.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../redux/shop/shop.selectors";
import { Route } from "react-router-dom";
import PageCollection from "./PageCollection";

const PageShop = ({ collections, match }) => {
  return (
    <div className="page_shop conteneur_large container-fluid">
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <>
            <h1 className="text-capitalize titre">Collections</h1>
            <div className="shop_list">
              {collections.map((collection) => {
                return <Collection key={collection.id} {...collection} />;
              })}
            </div>
          </>
        )}
      />

      <Route path={`${match.path}/:collectionId`} component={PageCollection} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps, null)(PageShop);
