import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import storeSetup from './store/store';

const { configureStore, history } = storeSetup;

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>, document.getElementById('root')
);
