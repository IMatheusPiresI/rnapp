import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

import 'react-native-gesture-handler';
import {AppRoutes} from './routes';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
