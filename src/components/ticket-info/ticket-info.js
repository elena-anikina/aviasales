import React from 'react';
import classes from './ticket-info.module.scss';

const TicketInfo = ({details}) => {
    const {time, transfers} = details;
    return (
        <>
            <div className={classes.one}>
                <div className={classes.infoTitle}>MOW-HKT</div>
                <div className={classes.infoTitle}>В ПУТИ</div>
                <div className={classes.infoTitle}>{transfers} ПЕРЕСАДКИ</div>
            </div>
            <div className={classes.one}>
                <div className={classes.info}>10:45-08:00</div>
                <div className={classes.info}>{time}</div>
                <div className={classes.info}>HKG, JNB</div>
            </div>
        </>
    );
};

export default TicketInfo;
