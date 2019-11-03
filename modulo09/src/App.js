import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import './config/reactotronConfig';
import Routes from './routes/index';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
