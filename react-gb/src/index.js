import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {initFB} from './services/index.js';

initFB();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);