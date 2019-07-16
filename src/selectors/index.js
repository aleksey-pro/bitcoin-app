import { createSelector } from 'reselect';

const getTotalPrice = state => state.total;

export const totalPriceSelector = createSelector(
  [getTotalPrice],
  total => total.price
);
