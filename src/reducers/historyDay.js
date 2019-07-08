import {
  FETCH_GRAPH,
  FETCH_GRAPH_SUCCESS,
  REQUEST_ERRORED,
} from '../actions/types';

const getHistoryDay = (
  state = {
    isFetching: false,
    error: false,
    daysHistory: {},
  },
  { type, payload }
) => {
  switch (type) {
    case FETCH_GRAPH:
      return {
        ...state,
        isFetching: true,
        daysHistory: payload,
      };
    case FETCH_GRAPH_SUCCESS:
      return {
        isFetching: false,
      };
    case REQUEST_ERRORED:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default getHistoryDay;
