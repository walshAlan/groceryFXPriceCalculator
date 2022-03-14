import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { initialState } from './store/initialState';

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
