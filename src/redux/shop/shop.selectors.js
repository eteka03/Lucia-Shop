import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectShopSections = createSelector(
  [shopSelector],
  (shop) => shop.sections
);

export const selectShopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);
