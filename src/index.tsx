import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './context';
import './sass/index.scss';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider initialState={{}}>
    <App />
  </Provider>,
  app,
);
