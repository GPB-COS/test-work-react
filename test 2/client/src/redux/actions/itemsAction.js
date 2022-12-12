import {
  FETCH_ITEMS, SET_ITEMS, SET_LOADING, FETCH_LOADING,
} from '../types';

export const setItemSagaAsync = (payload) => ({
  type: SET_ITEMS,
  payload: payload || null,
});

export const fetchItem = (payload) => ({
  type: FETCH_ITEMS,
  payload: payload || null,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload: payload || null,
});

export const fetchLoading = (payload) => ({
  type: FETCH_LOADING,
  payload: payload || null,
});
