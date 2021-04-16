import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assets/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import LandingPage from './views/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
