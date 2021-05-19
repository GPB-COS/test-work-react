import { 
  put, takeLatest, all } from 'redux-saga/effects';
import { 
  GET_SERVICES, 
  SERVICES_RECEIVED, 
  ERROR, GET_DETAILS,
  DETAILS_RECEIVED }     from '../actions/index';


function* fetchServices() 
{
  try {
    const data = yield fetch('/api/services')
      .then(response => response.json());
    
    yield put({ type: SERVICES_RECEIVED, json: data });
  } catch (error) 
  {
    yield put({ type: ERROR, error: error });
  }
}

function* fetchDetails(action) 
{
  try {
    const data = yield fetch(`/api/services/${action.id}`)
      .then(response => response.json());
    
    yield put({ type: DETAILS_RECEIVED, json: data });
  } catch (error) 
  {
    yield put({ type: ERROR, error: error });
  }
}

function* actionWatcher() 
{
  yield takeLatest(GET_SERVICES, fetchServices);
  yield takeLatest(GET_DETAILS, fetchDetails);
}

export default function* rootSaga() 
{
   yield all([
    actionWatcher(),
   ]);
}

