import React from 'react';
import '../app/app.scss';
import classes from './tiket.module.scss';
import TicketInfo from './ticket-info/ticket-info';

const Ticket = ({ price, carrier, segments }) => {
  const logo = 'https://pics.avs.io/99/36/' + carrier + '.png';
  const ticketSegments = segments.map((segment, i) => <TicketInfo key={i} details={segment} />);

  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <div className={classes.price}>{`${price} Р`}</div>
        <img src={logo} alt="" />
      </div>
      {ticketSegments}
    </div>
  );
};

export default Ticket;
