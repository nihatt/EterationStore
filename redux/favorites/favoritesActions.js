export const SET_FAVORITES = 'SET_FAVORITES';

export const setFavorites = (favorites) => {
  return {
    type: SET_FAVORITES,
    payload: favorites,
  };
};