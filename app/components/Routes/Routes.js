import React, { Component } from 'react';
import JsonTable from 'react-json-table';
import Center from 'react-center';
import AddRoute from '../AddForm/AddRoute';
import Entry from './Entry';

import styles from './Routes.css';

const pool = require('../../db');

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      query: {},
    };
    const q = 'select client_name as Cliente, employee_name as Empleado, vehicle_number as Vehiculo from vehicles,employees,clients, routes WHERE route_client = client_id AND route_employee = employee_id and route_vehicle = vehicle_id';
    pool.query(q, (err, res) => {
      this.setState({ query: res });
    });
  }
  render() {
    const options = {
      cellClass: styles.cell,
      headerClass: styles.header
    };
    const entries = () => {
      if (this.state.query.rows !== undefined) {
        this.state.query.rows.map(e => <Entry obj={e} />)
      }
    }
    return (
      <div data-tid="container" className="container-fluid">
        <h1>Rutas</h1>
        <Center><AddRoute /></Center>
        <div className={styles.div}>
          {console.log(this.state.query.rows)}
          {entries()}

        </div>
      </div>
    );
  }
}
