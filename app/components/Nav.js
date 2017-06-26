import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';

const Nav = () => (
  <Tabs>
    <Tab label="Inicio" value="/" containerElement={<Link to="/" />} />
    <Tab label="Añadir" value="/add" containerElement={<Link to="/add" />} />
    <Tab label="Rutas" value="/routes" containerElement={<Link to="/routes" />} />
    <Tab label="Mostrar" value="/display" containerElement={<Link to="/display" />} />

  </Tabs>
);

export default Nav;
