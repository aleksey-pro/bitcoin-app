import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  params: {
    api_key: 'b9594e4d991b8160871709d3bbc4e25f673ff290cf23633c88b5ac832dbe1e2d',
  },
});

export const getPrice = async type => {
  try {
    return await instance
      .get(`/price?fsym=${type}&tsyms=USD`)
      .then(response => response.data);
  } catch (error) {
    throw new Error('Ошибка сети. Попробуйте ещё раз');
  }
};

export const getHistory = async type => {
  try {
    return await instance
      .get(`/histoday?fsym=${type}&tsym=USD&limit=100`)
      .then(response => response.data);
  } catch (error) {
    throw new Error('Ошибка сети. Попробуйте ещё раз');
  }
};
