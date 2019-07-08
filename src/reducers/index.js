import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import prices from './prices';
import total from './total';
import getHistoryDay from './historyDay';

const rootReducer = combineReducers({
  routing: routerReducer,
  prices,
  total,
  daysHistory: getHistoryDay,
});

export default rootReducer;
