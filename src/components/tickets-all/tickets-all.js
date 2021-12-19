import React from 'react';
import classes from './tickets-all.module.scss';
import Ticket from '../ticket/ticket';
import Spinner from '../spinner/spinner';
import MoreButton from './more-button';
import NoTicketsMessage from './no-tickets-message';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class TicketsAll extends React.Component {
  componentDidMount() {
    const { getSearchId } = this.props;
    getSearchId();
  }

  componentDidUpdate() {
    const { fetchTickets, stop, searchId } = this.props;
    if (!stop) {
      fetchTickets(searchId);
    }
  }

  render() {
    const { howManyTicketsToShow, loading, stop, showMoreTickets, tickets: ticketsData } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const tickets = ticketsData
      .map(({ id, visible, ...ticket }) => (visible ? <Ticket key={id} {...ticket} /> : null))
      .filter((t) => t !== null)
      .slice(0, howManyTicketsToShow);

    const noTicketsMessage = stop && !tickets.length ? <NoTicketsMessage /> : null;
    const moreBtn = tickets.length < 5 ? null : <MoreButton func={showMoreTickets} />;

    return (
      <>
        {spinner}
        {tickets}
        {noTicketsMessage}
        {moreBtn}
      </>
    );
  }
}

const mapStateToProps = ({ tickets, loading, error, stop, searchId, howManyTicketsToShow }) => ({
  tickets,
  loading,
  error,
  stop,
  searchId,
  howManyTicketsToShow,
});

export default connect(mapStateToProps, actions)(TicketsAll);
