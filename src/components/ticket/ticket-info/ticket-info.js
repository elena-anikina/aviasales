import React from 'react';
import classes from './ticket-info.module.scss';
import formatTime from '../../../helpers/format-time';

const TicketInfo = ({ details }) => {
  const { transfers, date, destination, duration, origin, stops: stopsArr } = details;

  const date2 = new Date(new Date(date).getTime() + new Date(duration * 60 * 100).getTime());

  const time1 = formatTime(date);
  const time2 = formatTime(date2);

  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration - durationHours * 60;

  const stops = stopsArr.join(', ');

  return (
    <>
      <div className={classes.one}>
        <div className={classes.infoTitle}>{`${origin} ${destination}`}</div>
        <div className={classes.infoTitle}>в пути</div>
        <div className={classes.infoTitle}>{transfers} пересадки</div>
      </div>
      <div className={classes.one}>
        <div className={classes.info}>{`${time1}-${time2}`}</div>
        <div className={classes.info}>{`${durationHours}ч ${durationMinutes}м`}</div>
        <div className={classes.info}>{stops}</div>
      </div>
    </>
  );
};

export default TicketInfo;
