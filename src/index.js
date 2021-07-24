import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Connecting to Bootstrap 4...!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);