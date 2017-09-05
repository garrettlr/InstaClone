import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import feed from './feedReducer';


const rootReducer = combineReducers({
  router,
  feed,
});

export default rootReducer;
