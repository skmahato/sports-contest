import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import store from './store';

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
