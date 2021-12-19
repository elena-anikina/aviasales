import AviasalesApi from '../services/aviasales-api';

const aviasalesApi = new AviasalesApi();

export const fetchTicketsSuccess = (tickets) => ({ type: 'FETCH_TICKETS_SUCCESS', tickets });

export const fetchTicketsError = () => ({ type: 'FETCH_TICKETS_ERROR' });

export const getSearchIdSuccess = (searchId) => ({ type: 'GET_SEARCH_ID_SUCCESS', searchId });

export const getSearchId = () => (dispatch) => {
  aviasalesApi.getSearchId().then(
    (searchId) => {
      dispatch(getSearchIdSuccess(searchId));
    },
    () => dispatch(fetchTicketsError())
  );
};

export const stopFetching = () => ({ type: 'STOP_FETCHING' });

export const fetchTickets = (searchId) => (dispatch) => {
  aviasalesApi.getTickets(searchId).then(
    (result) => {
      if (result.stop) {
        dispatch(stopFetching());
      } else {
        dispatch(fetchTicketsSuccess(result.tickets));
      }
    },
    () => {
      dispatch(fetchTicketsError());
    }
  );
};

export const sortPrice = () => ({ type: 'SORT_PRICE' });

export const sortTime = () => ({ type: 'SORT_TIME' });

export const sortOptimal = () => ({ type: 'SORT_OPTIMAL' });

export const filterAllFunc = () => ({ type: 'FILTER_ALL' });

export const filterZeroFunc = () => ({ type: 'FILTER_ZERO' });

export const filterOneFunc = () => ({ type: 'FILTER_ONE' });

export const filterTwoFunc = () => ({ type: 'FILTER_TWO' });

export const filterThreeFunc = () => ({ type: 'FILTER_THREE' });

export const calcLoadingProgress = () => ({ type: 'LOADING_PROGRESS' });

export const removeLoadingProgress = () => ({ type: 'REMOVE_LOADING_PROGRESS' });

export const finishLoadingProgress = () => (dispatch) => {
  setTimeout(() => {
    dispatch(removeLoadingProgress());
  }, 2000);
};

export const showMoreTickets = () => ({ type: 'SHOW_MORE_TICKETS' });
