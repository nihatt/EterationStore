import { getFavoriteIds } from "../../src/asyncStorage/storage";

import { SET_FAVORITES } from "./favoritesActions";


const initialState = {
  favorites:  getFavoriteIds(),
};

const favoritesReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;