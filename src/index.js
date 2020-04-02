import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarList from "./components/CarList"
import store from "./stores/CarStore"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CarList store={store} />,
  document.getElementById('root')
);


serviceWorker.unregister();
