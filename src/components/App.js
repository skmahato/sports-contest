import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestContent } from '../actions/home';
import { contentSelector } from '../selectors/content';

const App = () => {
  const dispatch = useDispatch();
  const contents = useSelector(contentSelector);

  useEffect(() => {
    dispatch(requestContent());
  }, []);

  console.log(contents);

  return (
    <div className="App">
      Hello
    </div>
  );
};

export default App;
