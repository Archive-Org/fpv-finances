import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Geosuggest from 'react-geosuggest';

import DatePicker from 'react-bootstrap-date-picker';

const pool = require('../../db');

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.handleEmployee = this.handleEmployee.bind(this);
    this.handleClient = this.handleClient.bind(this);
    this.handleVehicle = this.handleVehicle.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSummit = this.handleSummit.bind(this);
    this.setState({ clientList: ['gfgdf', 'ggdg', 'gdgdsf'] });
    this.setState({ vehicleList: ['gfgdf', 'ggdg', 'gdgdsf'] });
    this.setState({ employeesList: ['gfgdf', 'ggdg', 'gdgdsf'] });

    const q = `select name from employees`;
    pool.query(q, (err, res) => {
      console.log(res);
    });
  }
  state = {
    clientList: ['gfgdf', 'ggdg', 'gdgdsf'], // (id, name) objec pairs
    employeesList: ['1', '2'],
    vehicleList: ['3'],
    employee: '',
    client: '',
    vehicle: '',
    date: '',
    origen: '',
    dest: '',
  };
  handleEmployee = (event, index, employee) => this.setState({ employee });
  handleClient = (event, index, client) => this.setState({ client });
  handleVehicle = (event, index, vehicle) => this.setState({ vehicle });
  handleDate = (event, index, date) => this.setState({ date });
  handleOrigen = (event, index, origen) => this.setState({ origen });
  handleDest = (event, index, dest) => this.setState({ dest });
  handleSummit = (event, index) => console.log(this.state);
  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Nombre</ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="-">
            {this.state.clientList.map((e) =>
              <option value={e.toString()}>{e}</option>
            )}
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Apellido </ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="-">
            {this.state.employeesList.map((e) =>
              <option value={e.toString()}>{e}</option>
            )}
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Nacimiento: </ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="-">
            {this.state.vehicleList.map((e) =>
              <option value={e.toString()}>{e}</option>
            )}
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Salario: </ControlLabel>
          {' '}
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Expiracion DNI: </ControlLabel>
          {' '}
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Expiracion Carnet: </ControlLabel>
          {' '}
        </FormGroup>
        {' '}
        <Button type="submit" onClick={this.handleSummit}>
          Añadir
        </Button>
      </Form>
    );
  }
}
