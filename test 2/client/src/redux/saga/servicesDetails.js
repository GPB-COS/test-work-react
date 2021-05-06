import { call, debounce, put } from "redux-saga/effects";
import { getErrorDetailsAC } from "../actionCreators/errorDetailsAC";
import { getServicesDetailsAC } from "../actionCreators/getServicesDetailsAC";
import { SAGA_GET_SERVISES_DETAILS } from "../types/services";

function getServicesDetailsFetch(id) {
  return fetch(`http://localhost:7070/api/services/${id}`)
    .then((response) => response.json())
}

function* getServicesDetaildWorker(action) {
  try {
    const servicesDetails = yield call(getServicesDetailsFetch, action.payload);
    yield put(getServicesDetailsAC(servicesDetails));
  } catch (e) {
    yield put(getErrorDetailsAC('Произошла ошибка'));
  }
}

function* getServicesDetailsWatcher() {
  yield debounce(300, SAGA_GET_SERVISES_DETAILS, getServicesDetaildWorker);
}

export default getServicesDetailsWatcher;
