// @flow
import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    console.log('You are in home');
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
