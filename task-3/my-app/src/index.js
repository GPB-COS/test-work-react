import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Provider }             from 'mobx-react';
import reportWebVitals          from './reportWebVitals';
import {
  BrowserRouter as Router
}                               from "react-router-dom";
import { createBrowserHistory } from 'history';
import { configure }            from 'mobx';

import EventsStore              from './store/EventsStore';
import App                      from './App';


const history = createBrowserHistory();

configure({ enforceActions: true });

ReactDOM.render(
  <Provider { ...EventsStore }>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
