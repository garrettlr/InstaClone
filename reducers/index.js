import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import feedReducer from './feedReducer';


const rootReducer = combineReducers({
  router,
  feedReducer,
});

export default rootReducer;
