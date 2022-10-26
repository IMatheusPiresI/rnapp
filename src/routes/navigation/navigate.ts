import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export const navigationRef =
  React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

export function navigate(
  name: keyof ReactNavigation.RootParamList,
  params?: any,
) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}
