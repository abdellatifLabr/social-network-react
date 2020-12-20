import { types } from '../actions/user';

const initialState = null;

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGN_IN_USER:
      return payload;

    case types.SIGN_OUT_USER:
      return payload;

    case types.FETCH_USER:
      return payload;

    default:
      return state;
  }
};

export default userReducer;
