import { v4 as uuid } from 'uuid';
import initialState from './state';
import { filterTickets } from '../helpers/filter-tickets';
import { sortOptimalFunc, sortPriceFunc, sortTimeFunc } from '../helpers/sort-functions';
import calcLoadingProgress from '../helpers/calc-loading-progress';

const reducer = (state = initialState, action) => {
  const {
    error,
    filters: { zero, one, two, three },
    filterAll: all,
    howManyTicketsToShow,
    sort: { price, time, optimal },
    stop,
    tickets,
  } = state;

  switch (action.type) {
    case 'STOP_FETCHING':
      return {
        ...state,
        stop: true,
      };

    case 'GET_SEARCH_ID_SUCCESS':
      return {
        ...state,
        searchId: action.searchId,
      };

    case 'FETCH_TICKETS_SUCCESS': {
      const ticketsWithId = [...action.tickets].map((ticket) => ({ id: uuid(), visible: true, ...ticket }));
      return {
        ...state,
        tickets: [...tickets, ...ticketsWithId].sort((ticket1, ticket2) => ticket1.price - ticket2.price),
        loading: false,
      };
    }

    case 'FETCH_TICKETS_ERROR':
      return {
        ...state,
        loading: false,
        error: error + 1,
      };

    case 'SORT_PRICE':
      return sortPriceFunc(state, tickets, price);

    case 'SORT_TIME':
      return sortTimeFunc(state, tickets, time);

    case 'SORT_OPTIMAL':
      return sortOptimalFunc(state, tickets, optimal);

    case 'FILTER_ALL':
      return {
        ...state,
        tickets: filterTickets(tickets, null, all),
        filterAll: !all,
        filters: { zero: !all, one: !all, two: !all, three: !all },
      };

    case 'FILTER_ZERO':
      return {
        ...state,
        tickets: filterTickets(tickets, 0, zero),
        filters: { zero: !zero, one, two, three },
        filterAll: !zero === true && one === true && two === true && three === true,
      };

    case 'FILTER_ONE':
      return {
        ...state,
        tickets: filterTickets(tickets, 1, one),
        filters: { zero, one: !one, two, three },
        filterAll: !one === true && zero === true && two === true && three === true,
      };

    case 'FILTER_TWO':
      return {
        ...state,
        tickets: filterTickets(tickets, 2, two),
        filters: { zero, one, two: !two, three },
        filterAll: !two === true && zero === true && one === true && three === true,
      };

    case 'FILTER_THREE':
      return {
        ...state,
        tickets: filterTickets(tickets, 3, three),
        filters: { zero, one, two, three: !three },
        filterAll: !three === true && zero === true && one === true && two === true,
      };

    case 'SHOW_MORE_TICKETS':
      return {
        ...state,
        howManyTicketsToShow: howManyTicketsToShow + 5,
      };

    case 'LOADING_PROGRESS':
      return {
        ...state,
        loadingProgress: calcLoadingProgress(stop, tickets),
      };

    case 'REMOVE_LOADING_PROGRESS':
      return {
        ...state,
        loadingProgressDelete: true,
      };

    default:
      return state;
  }
};

export default reducer;
