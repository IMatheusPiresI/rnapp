import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import 'react-native-gesture-handler';
import { AppRoutes } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

import Toast from 'react-native-toast-message';
import { toastConfig } from './utils/toastMessage/toast.config';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <Toast config={toastConfig} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
