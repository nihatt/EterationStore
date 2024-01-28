export const SET_BASKET = 'SET_BASKET';

export const setBasket = (basket) => {
  return {
    type: SET_BASKET,
    payload: basket,
  };
};