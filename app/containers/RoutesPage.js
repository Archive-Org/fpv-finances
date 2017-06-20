// @flow
import React, { Component } from 'react';
import Nav from '../components/Nav';
import Routes from '../components/Routes/Routes';

export default class RoutesPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}
