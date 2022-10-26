import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabRoutes} from './Tab/TabRoutes';
import {navigationRef} from './navigation/navigate';

export const AppRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <TabRoutes />
    </NavigationContainer>
  );
};
