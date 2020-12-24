import { combineReducers } from 'redux';

import userReducer from './user';
import menuReducer from './menu';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;
