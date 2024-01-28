export const SET_INDICATOR = 'SET_INDICATOR';

export const setIndicator = (indicator) => {
  return {
    type: SET_INDICATOR,
    payload: indicator,
  };
};