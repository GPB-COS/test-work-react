import { all, fork } from 'redux-saga/effects';
import PicsSaga from './itemsSaga';

export default function* rootSaga() {
  yield all([
    fork(PicsSaga),
  ]);
}
