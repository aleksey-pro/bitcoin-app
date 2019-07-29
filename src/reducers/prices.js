import {
  FETCH_PRICE,
  FETCH_PRICE_SUCCESS,
  REQUEST_ERRORED,
} from '../actions/types';

const getPrices = (
  state = {
    isFetching: false,
    error: false,
    types: [],
  },
  { type, payload }
) => {
  switch (type) {
    case FETCH_PRICE:
      return {
        ...state,
        isFetching: true,
      };
    case '@@router/LOCATION_CHANGE':
      if (payload.pathname === '/') {
        return {
          ...state,
          types: [],
        };
      } else return state;
    case FETCH_PRICE_SUCCESS:
      return {
        isFetching: false,
        types: state.types.concat(payload),
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

export default getPrices;
