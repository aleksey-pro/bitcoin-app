import { UPDATE_PRICE } from '../actions/types';

const setTotal = (
  state = {
    price: 0,
  },
  { type, payload }
) => {
  switch (type) {
    case UPDATE_PRICE:
      return {
        price: state.price + payload.USD,
      };
    default:
      return state;
  }
};

export default setTotal;
