import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore()
const Root = () => {
  return <Provider store={store}>
    <App />
  </Provider>
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
