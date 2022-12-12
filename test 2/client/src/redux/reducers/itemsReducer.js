import { SET_ITEMS, SET_LOADING } from '../types';

export default function itemReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ITEMS:
      return payload;
    case SET_LOADING:
      return payload;
    default:
      return state;
  }
}
