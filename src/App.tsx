import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';

import 'react-native-gesture-handler';
import {AppRoutes} from './routes';
import {Provider} from 'react-redux';
import {store} from './store';
import {Loading} from './screens/Loading';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes} from './routes/Stack/AuthRoutes';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const renderApp = () => {
    if (!user) {
      return <AuthRoutes />;
    }
    return <Loading />;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>{renderApp()}</ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
