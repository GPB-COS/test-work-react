import { call, debounce, put } from "redux-saga/effects";
import { getErrorAC } from "../actionCreators/errorsAC";
import { getAllServicesAC } from "../actionCreators/getServices";
import { SAGA_GET_ALL_SERVISES } from "../types/services";

function getAllServicesFetch() {
  return fetch("http://localhost:7070/api/services")
    .then((response) => response.json())
}

function* getServicesWorker() {
  try {
    const services = yield call(getAllServicesFetch);
    yield put(getAllServicesAC(services));
  } catch (e) {
    yield put(getErrorAC('Произошла ошибка'));
  }
}

function* getServicesWatcher() {
  yield debounce(300, SAGA_GET_ALL_SERVISES, getServicesWorker);
}

export default getServicesWatcher;
