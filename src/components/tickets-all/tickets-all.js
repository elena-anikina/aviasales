import React from 'react';
import {connect} from "react-redux";
import classes from './tickets-all.module.scss';
import Ticket from '../ticket/ticket';

const TicketsAll = ({tickets}) => {

    const renderTickets = tickets.map(({id, ...ticket}, i) => (
        <Ticket key={i} {...ticket} />
    ));

    return (
        <>
            {renderTickets}
            <button type="button" className={classes.btn}>
                ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
            </button>
        </>
    );
};

const mapStateToProps = ({tickets}) => ({tickets});


export default connect(mapStateToProps)(TicketsAll);
