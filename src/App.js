import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store';
import {Provider} from 'react-redux';

import Router from './router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
