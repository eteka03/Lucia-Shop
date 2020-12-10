import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopSelector = (state) => state.shop;

export const selectShopSections = createSelector(
  [shopSelector],
  (shop) => shop.sections
);

export const selectShopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam
    )
  )
);
