// @flow
import React, { Component } from 'react';
import Display from '../components/Display';
import Nav from '../components/Nav';

export default class DisplayPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Display />
      </div>
    );
  }
}
