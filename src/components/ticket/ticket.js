import React from 'react';
import '../app/app.scss';
import classes from './tiket.module.scss';
import TicketInfo from '../ticket-info/ticket-info';

const Ticket = ({price, ...details}) => (
  <div className={classes.ticket}>
    <div className={classes.header}>
      <div className={classes.price}>{price}</div>
      <img src="https://pics.avs.io/99/36/S7.png" alt="" />
    </div>
    <TicketInfo details={details} />
    <TicketInfo details={details} />
  </div>
);

export default Ticket;
