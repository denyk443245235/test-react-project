import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import history from "./history";
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router  history={history}>
      <App/>
    </Router>
  </Provider>,
    document.getElementById('root')
);