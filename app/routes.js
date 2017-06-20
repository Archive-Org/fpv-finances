/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AddPage from './containers/AddPage';
import DisplayPage from './containers/DisplayPage';
import RoutesPage from './containers/RoutesPage';

export default () => (
  <App>
    <Switch>
      <Route path="/add" component={AddPage} />
      <Route path="/display" component={DisplayPage} />
      <Route path="/routes" component={RoutesPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
