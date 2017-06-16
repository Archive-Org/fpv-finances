import React, { Component } from 'react';
import Route from './AddForm/Route';

export default class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        'Ruta', 'Vehiculo', 'Empleado', 'Prestamo', 'Recivo',
        'Transferencia', 'Gasoil', 'Cliente'
      ],
      selected: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ selected: event.target.value });
  }
  handleSubmit(event) {
    console.log(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  getForm() {
    switch (this.state.selected) {
      case 'Ruta':
        return (
          <Route />
        );
      default:
        return (<div />);
    }
  }


  render() {
    const listItems = this.state.items.map((i) =>
      <option value={i.toString()}>{i}</option>
    );
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange} className="form-control">
          {listItems}
        </select>
        {this.getForm()}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
