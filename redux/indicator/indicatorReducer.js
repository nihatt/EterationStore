import { SET_INDICATOR } from "./indicatorActions";


const initialState = {
  indicator: 0,
};

const IndicatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INDICATOR:
      return {
        ...state,
        indicator: action.payload,
      };
    default:
      return state;
  }
};

export default IndicatorReducer;