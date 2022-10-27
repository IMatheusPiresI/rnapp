import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabRoutes} from './Tab/TabRoutes';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthRoutes} from './Stack/AuthRoutes';

import {authActions} from '../store/modules/auth/actions';
import {useDispatch} from 'react-redux';
import useAppSelector from '../hooks/useAppSelector';
import {navigationRef} from '../utils/navigation';

export const AppRoutes = () => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.authReducer.user);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      dispatch(
        authActions.setUser({
          email: user.email!,
          uid: user.uid,
        }),
      );
    } else {
      dispatch(authActions.setUser(null));
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  console.log(user);

  const renderRoutes = () => {
    if (user) {
      return <TabRoutes />;
    }
    return <AuthRoutes />;
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {renderRoutes()}
    </NavigationContainer>
  );
};
