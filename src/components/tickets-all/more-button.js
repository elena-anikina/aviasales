import React from 'react';
import classes from './tickets-all.module.scss';

const MoreButton = ({ func }) => {
  return (
    <button onClick={func} type="button" className={classes.btn}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
};

export default MoreButton;
