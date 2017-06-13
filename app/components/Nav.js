import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';

const Nav = () => (
  <Tabs>
    <Tab label="Home" value="/" linkButton containerElement={<Link to="/" />} />
    <Tab label="add" value="/add" linkButton containerElement={<Link to="/add" />} />
    <Tab label="Display" value="/display" linkButton containerElement={<Link to="/display" />} />

  </Tabs>
);

export default Nav;
