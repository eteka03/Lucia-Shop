import React, { useEffect } from "react";
import { connect } from "react-redux";
import CollectionItem from "../components/CollectionItem";
import { selectCollection } from "../redux/shop/shop.selectors";
import "../styles/pages/pageCollection.scss";
const PageColletion = ({ match, collection }) => {
  return (
    <>
      {collection ? (
        <div className="page_collection conteneur_large container-fluid ">
          <h2 className="title">{collection.title}</h2>
          <div className="items">
            {collection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps, null)(PageColletion);
