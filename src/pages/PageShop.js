import React, { useEffect, useCallback } from "react";
import Collection from "../components/Collection";
import "../styles/pages/shop.scss";
import { connect, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import PageCollection from "./PageCollection";
import { firestore } from "../firebase/firebase.utils";
import { setCollectionsAndItems } from "../redux/shop/shop.actions";

const PageShop = ({ setcollectionAndItems, collections, match }) => {
  const dispatch = useDispatch();

  const memoizedCollectionsAnItems = useCallback(() => {
    const getDatas = async () => {
      /* get all collections */
      let getAllCollections = (
        await firestore.collection("collections").get()
      ).docs.map((collection) => collection);

      /*get all products and classify by collection */

      let getAllProdByCollection = async () => {
        const prods = getAllCollections.map(async (col) => {
          let produi = (
            await firestore
              .collection("products")
              .where("collectionId", "==", col.id)
              .get()
          ).docs.map((prod) => ({ productId: prod.id, ...prod.data() }));
          return {
            id: col.id,
            ...col.data(),
            routeName: encodeURI(col.data().routeName.toLowerCase()),
            items: produi,
          };
        });
        return Promise.all(prods);
      };

      let allDatas = await getAllProdByCollection();

      dispatch({ type: "SET_COLLECTIONS_AND_ITEMS", payload: allDatas });
    };

    getDatas();
  }, []);

  useEffect(() => {
    memoizedCollectionsAnItems();
  }, [memoizedCollectionsAnItems]);

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
                return (
                  <Collection key={collection.id} collection={collection} />
                );
              })}
            </div>
          </>
        )}
      />

      <Route path={`${match.path}/:collectionId`} component={PageCollection} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});

const mapDispatchToProps = (dispatch) => ({
  setcollectionAndItems: (data) => dispatch(setCollectionsAndItems(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageShop);
