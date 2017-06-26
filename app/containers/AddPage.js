// @flow
import React, { Component } from 'react';
import AddForm from '../components/AddForm';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Añadir</h2>
        <br />
        <AddForm />
      </div>
    );
  }
}
