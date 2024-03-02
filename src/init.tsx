import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices/index';

const init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default init;
