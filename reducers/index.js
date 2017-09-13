import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import feed from './feedReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
  router,
  feed,
  login,
});

export default rootReducer;
