import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { composeEnhancers } from '../helpers/compose-enhancers';

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
