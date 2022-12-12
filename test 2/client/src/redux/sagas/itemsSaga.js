import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ITEMS } from '../types';
import { setItemSagaAsync } from '../actions/itemsAction';

const getItemAsync = () => axios('http://localhost:7070/api/services');

function* PicWorker() {
  try {
    yield delay(500);
    const res = yield call(getItemAsync);
    yield put(setItemSagaAsync(res.data));
  } catch (e) {
    console.log(e);
  }
}

function* PicWatcher() {
  yield takeLatest(FETCH_ITEMS, PicWorker);
}

export default PicWatcher;
