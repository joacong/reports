import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from '../store';

const element = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element as HTMLElement
);
registerServiceWorker();
