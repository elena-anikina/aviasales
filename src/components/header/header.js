import React from 'react';
import classes from './header.module.scss';
import logo from './Logo.png';
import LoadingProgress from '../loading-progress/loading-progress';

const Header = () => (
  <div className={classes.header}>
    <img className={classes.logo} src={logo} alt="logo" />
    <LoadingProgress />
  </div>
);

export default Header;
