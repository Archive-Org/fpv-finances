/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AddPage from './containers/AddPage';
import DisplayPage from './containers/DisplayPage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/add" component={AddPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/display" component={DisplayPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
