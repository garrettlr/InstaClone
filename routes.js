import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Feed from './containers/Feed';

const Routes = () => (
  <App>
    <Switch>
      <Route
        path="/feed"
        component={Feed}
      />

      <Route
        path="/"
        component={HomePage}
      />

    </Switch>
  </App>
);

export default Routes;
