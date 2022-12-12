import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/saga';

import ItemSaga from './reducers/itemsReducer';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    ItemSaga,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
