import { types } from '../actions/user.actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_USER:
      return payload;

    case types.SIGN_OUT_USER:
      return payload;

    default:
      return state;
  }
};

export default userReducer;
