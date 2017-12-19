import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLayout from './Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppLayout />,
  document.getElementById('root'));
registerServiceWorker();
