import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
require("!style-loader!css-loader!sass-loader!./sass/all.scss");

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("container");

  let store;
  store = configureStore();
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
});
