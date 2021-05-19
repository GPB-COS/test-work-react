import React                                 from 'react';
import ReactDOM                              from 'react-dom';
import { Provider }                          from 'react-redux';
import createSagaMiddleware                  from 'redux-saga';
import { 
  createStore, 
  applyMiddleware, 
  compose 
}                                            from 'redux';
import { logger }                            from 'redux-logger';
import { createBrowserHistory }              from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';

import createRootReducer                     from './reducers/index';
import rootSaga                              from './sagas';
import {getServices }                        from './actions/index';
import App                                   from './App';
import reportWebVitals                       from './reportWebVitals';

import './index.css';


const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware, 
      logger, 
    ),
  ),
);

sagaMiddleware.run(rootSaga);
store.dispatch(getServices());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) { module.hot.accept(App);}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
