import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
// import * as tabActions from '../actions/tabs';
// import * as CompListActions from '../actions/complist';
// import * as workspaceActions from '../actions/workspace';
// import * as configActions from '../actions/config';
// import * as FileSystemActions from '../actions/FileSystemActions';
// import * as methods from '../actions/methods';
// import type { tabStateType } from '../reducers/tabs';

const history = createHashHistory();

const configureStore = (initialState) => {
  const middleware = [];
  const enhancers = [];

  //thunk
  middleware.push(thunk);

  //logger
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  //router

  const router = routerMiddleware(history);
  middleware.push(router);

  //devTools
  const actionCreators = {

  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionCreators,
  });

  enhancers.push(applyMiddleware(...middleware));

  const enhancer = composeEnhancers(...enhancers);

  //initStore

  const store = createStore(rootReducer, initialState, enhancer);

};
