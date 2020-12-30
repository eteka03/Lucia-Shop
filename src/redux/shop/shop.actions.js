import { SET_COLLECTIONS, SET_COLLECTIONS_AND_ITEMS } from "../actionTypes";

export const setCollections = (data) => ({
  type: SET_COLLECTIONS,
  payload: data,
});

export const setCollectionsAndItems = (data) => ({
  type: SET_COLLECTIONS_AND_ITEMS,
  payload: data,
});
