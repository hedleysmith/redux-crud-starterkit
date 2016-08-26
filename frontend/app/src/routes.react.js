import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Wrapper, Dashboard, ItemList, NotFound } from './containers';
import configureStore from './redux/store';

// Initialise styles.
import baseStyles from './base/base.css';

const rootEl = document.getElementById('reactApp');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}r>
      <Route path="/" component={Wrapper}>

        { /* Home (main) route */ }
        <IndexRoute component={Dashboard} />

        { /* Routes */ }
        <Route path="items" >
          <IndexRoute component={ItemList} />
          {/* this will be /items/:id */}
          {/* <Route path=":id" /> */}
        </Route>

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Router>
  </Provider>
  , rootEl
);
