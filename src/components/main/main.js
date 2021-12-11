import React from 'react';
import classes from './main.module.scss';
import Tabs from '../tabs/tabs';
import TicketsAll from '../tickets-all/tickets-all';

const Main = () => (
  <div className={classes.main}>
    <Tabs />
    <TicketsAll />
  </div>
);

export default Main;
