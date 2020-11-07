import {types} from '../fixtures/types';

const initialState = {
  titleNavbar: 'Principal',
  showLoading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetTitleNavbar:
      return {
        ...state,
        titleNavbar: action.payload,
      };
    case types.uiStartLoading:
      return {
        ...state,
        showLoading: true,
      };
    case types.uiStopLoading:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};
