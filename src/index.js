// Dependencias
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import Routes from './routes';

//Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
