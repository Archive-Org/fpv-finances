import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
var DatePicker = require("react-bootstrap-date-picker");
import Geosuggest from 'react-geosuggest';
const pool = require('../../db');

export default class AddRoute extends Component {
  constructor(props) {
    super(props);
    this.handleEmployee = this.handleEmployee.bind(this);
    this.handleClient = this.handleClient.bind(this);
    this.handleVehicle = this.handleVehicle.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSummit = this.handleSummit.bind(this);

    // Fetch employees
    pool.query('select employee_name from employees', (err, res) => {
      this.setState({ employeesList: res.rows.map(e => e.employee_name) });
      this.setState({ employees: res.rows });
    });
    // Fetch clients
    pool.query('select client_name from clients', (err, res) => {
      this.setState({ clientList: res.rows.map(e => e.client_name) });
      this.setState({ clients: res.rows });
    });
    // Fetch Vehicles
    pool.query('select vehicle_number from vehicles', (err, res) => {
      this.setState({ vehicleList: res.rows.map(e => e.vehicle_number) });
      this.setState({ vehicles: res.rows });
    });
  }
  state = {
    clientList: ['Cargando...'],
    employeesList: ['Cargando...'],
    vehicleList: ['Cargando...'],
    employee: '',
    client: '',
    vehicle: '',
    date: '',
    origen: '',
    dest: '',
  };
  handleEmployee = (event, index, employee) => this.setState({ employee: event.target.value });
  handleClient = (event, index, client) => this.setState({ client: event.target.value });
  handleVehicle = (event, index, vehicle) => this.setState({ vehicle: event.target.value });
  handleDate = (event, index, date) => this.setState({ date: event.target.value });
  handleOrigen = (event, index, origen) => this.setState({ origen: event.target.value });
  handleDest = (event, index, dest) => this.setState({ dest: event.target.value });
  handleSummit = (event, index, data) => console.log(this.state);
  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel> Client </ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="-" onChange={this.handleClient}>
            {this.state.clientList.map((e) =>
              <option value={e.toString()}>{e}</option>
            )}
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Empleado: </ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="-" onChange={this.handleEmployee}>
            {this.state.employeesList.map((e) =>
              <option value={e.toString()}>{e}</option>
            )}
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Vehiculo: </ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="-" onChange={this.handleVehicle}>
            {this.state.vehicleList.map((e) =>
              <option value={e.toString()}>{e}</option>
            )}
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Fecha: </ControlLabel>
          {' '}

        </FormGroup>
        {' '}
        <Button bsStyle="success" className="pull-right" onClick={this.handleSummit}>
          Añadir
        </Button>
      </Form>
    );
  }
}
