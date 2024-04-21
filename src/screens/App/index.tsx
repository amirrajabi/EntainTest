import React from 'react';
import {Provider} from 'react-redux';

import Home from '../Home';
import {store} from '../../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
