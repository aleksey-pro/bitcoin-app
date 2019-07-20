import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import prices from './prices';
import getHistoryDay from './historyDay';

const rootReducer = combineReducers({
  routing: routerReducer,
  prices,
  daysHistory: getHistoryDay,
});

export default rootReducer;
