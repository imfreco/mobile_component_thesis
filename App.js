import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import {store} from './src/store';
import {AppRouter} from './src/routes/AppRouter';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppRouter />
      </PaperProvider>
    </Provider>
  );
};

export default App;
