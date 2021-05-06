import { all } from "redux-saga/effects";
import getServicesWatcher from "./services";
import getServicesDetailsWatcher from "./servicesDetails";


export default function* rootSaga() {
  yield all([
    getServicesWatcher(),
    getServicesDetailsWatcher()
  ]);
}
