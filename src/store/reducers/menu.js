import { types } from '../actions/menu';

const initialState = false;

const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.OPEN_MENU:
      return payload;

    case types.CLOSE_MENU:
      return payload;

    case types.TOGGLE_MENU:
      return !state;

    default:
      return state;
  }
};

export default menuReducer;
