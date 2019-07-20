import { createSelector } from 'reselect';

const getPrices = state => state.prices.types.map(price => price.USD);

export const totalPriceSelector = createSelector(
  [getPrices],
  price =>
    price.reduce((acc, i) => {
      return acc + i;
    }, 0)
);
