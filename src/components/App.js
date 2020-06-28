import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './Layout';
import { requestContent } from '../actions/home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContent());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Layout} />
    </Switch>
  );
};

export default App;
