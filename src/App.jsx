import React, { PureComponent } from 'react';

import 'normalize.css';
import 'crypto-icons/font.css';
import 'crypto-icons/styles.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Chart from './pages/Chart/Chart';

import data from './config.json';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends PureComponent {
  // В том случае если хотим пробросить config в store и вытаскивать данные от туда,
  // но это оказалось очень трудоемко писать потом редюсеры, поэтому проброшу config
  // просто через props cверху вниз
  // componentDidMount() {
  //   store.dispatch({ type: INIT_CONFIG, payload: data });
  // }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={Layout}>
            <Route
              path="/"
              component={props => <Main {...props} data={data} />}
            />
            <Route
              path="/charts/:id"
              component={props => <Chart {...props} data={data} />}
            />
          </Route>
        </Router>
      </Provider>
    );
  }
}
