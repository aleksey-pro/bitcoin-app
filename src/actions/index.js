import {
  FETCH_PRICE,
  FETCH_PRICE_SUCCESS,
  REQUEST_ERRORED,
  UPDATE_PRICE,
  FETCH_GRAPH,
  FETCH_GRAPH_SUCCESS,
} from './types';
import { getPrice as getPriceApi } from '../api';
import { getHistory as getHistoryApi } from '../api';

const getPrice = price => dispatch => {
  dispatch({
    type: FETCH_PRICE_SUCCESS,
    payload: price,
  });
};

const updatePrice = data => dispatch => {
  dispatch({
    type: UPDATE_PRICE,
    payload: data,
  });
};

export const fetchPrice = type => async dispatch => {
  dispatch({
    type: FETCH_PRICE,
    isFetching: true,
  });
  try {
    await getPriceApi(type)
      .then(data => {
        dispatch(getPrice(data));
        return data;
      })
      .then(data => {
        dispatch(updatePrice(data));
      });
  } catch (err) {
    dispatch({
      type: REQUEST_ERRORED,
      payload: err.message,
    });
  }
};

const getDayHistory = data => dispatch => {
  dispatch({
    type: FETCH_GRAPH_SUCCESS,
    payload: data,
  });
};

export const fetchDayHistory = type => async dispatch => {
  dispatch({
    type: FETCH_GRAPH,
    isFetching: true,
  });
  try {
    await getHistoryApi(type).then(data => {
      dispatch(getDayHistory(data));
    });
  } catch (err) {
    dispatch({
      type: REQUEST_ERRORED,
      payload: err.message,
    });
  }
};
