// rootReducer.js

import { combineReducers } from 'redux';
import favoritesReducer from './favorites/favoritesReducer';
import basketReducer from './basket/basketReducer';
import IndicatorReducer from './indicator/indicatorReducer';
import loadingReducer from './loading/loadingReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  favorites: favoritesReducer,
  basket: basketReducer,
  indicator: IndicatorReducer,

});

export default rootReducer;