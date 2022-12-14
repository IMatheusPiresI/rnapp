import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthRoutes } from './Stack/AuthRoutes';

import { authActions } from '../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import useAppSelector from '../hooks/useAppSelector';
import { navigationRef } from './navigation';
import { StackAppRoutes } from './Stack/StackAppRoutes';

export const AppRoutes = () => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();
  const userLogged = useAppSelector((state) => state.authReducer.user);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  const renderRoutes = () => {
    if (userLogged) {
      return <StackAppRoutes />;
    }
    return <AuthRoutes />;
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {renderRoutes()}
    </NavigationContainer>
  );
};
