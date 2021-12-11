import React from 'react';
import classes from './header.module.scss';
import logo from './Logo.png';

const Header = () => (
  <div className={classes.header}>
    <img className={classes.logo} src={logo} alt="logo" />
  </div>
);

export default Header;
