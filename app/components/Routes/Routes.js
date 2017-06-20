import React, { Component } from 'react';
import JsonTable from 'react-json-table';
import styles from './Routes.css';

const pool = require('../../db');

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      query: {},
    };
    const q = `
      SELECT client_name,
            employee, vehicle, COALESCE(to_char(date, 'DD-MM-YYYY HH24:MI:SS'), '') AS Fecha
            from routes,employees, clients where client = client_id`;
    pool.query(q, (err, res) => {
      this.setState({ query: res });
    });
  }
  render() {
    const options = {
      cellClass: styles.cell,
      headerClass: styles.header
    };
    return (
      <div data-tid="container" className="container-fluid">
        <h1>Rutas</h1>
        <div className={styles.div}>
          <JsonTable className="table-striped" rows={this.state.query.rows} options={options} />
        </div>
      </div>
    );
  }
}
