import React, { Component } from 'react';


export default class Route extends Component {
  render() {
    console.log('Route');
    return (
      <div className="form-group">
        <label htmlFor="usr">Name:</label>
        <input type="text" className="form-control" id="usr" />
      </div>
    );
  }
}
