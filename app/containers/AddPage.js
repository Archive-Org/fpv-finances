// @flow
import React, { Component } from 'react';
import Add from '../components/Add';
import Nav from '../components/Nav';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Add />
      </div>
    );
  }
}
