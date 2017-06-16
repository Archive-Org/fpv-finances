import React, { Component } from 'react';
import AddForm from './AddForm';

export default class Add extends Component {
  render() {
    return (
      <div>
        <div data-tid="container">
          <h2>Add</h2>
          <AddForm />
        </div>
      </div>
    );
  }
}
