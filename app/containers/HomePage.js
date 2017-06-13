// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Nav from '../components/Nav';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}
