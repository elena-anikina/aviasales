import React from 'react';
import classes from './tickets-all.module.scss';

const NoTicketsMessage = () => {
  return (
    <div className={classes.noTicketsMessage}>
      <span>Рейсов, подходящих под заданные фильтры, не найдено.</span>
    </div>
  );
};

export default NoTicketsMessage;
