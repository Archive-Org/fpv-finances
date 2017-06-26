import React, { Component } from 'react';
import { Image, Col, Row, Grid, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router';

const { object } = React.PropTypes;

export default class Song extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.now = this.now.bind(this);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={2} md={2}>
            <h4>{this.props.obj.cliente}</h4>
          </Col>
          <Col sm={6} md={3}>
            <h4>{this.props.obj.empleado}</h4>
            <h4>{this.props.obj.vehiculo}</h4>
          </Col>
        </Row>
      </Grid>
    );
  }
}
