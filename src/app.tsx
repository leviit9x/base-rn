import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useServices } from './services';
import { RootNavigator } from './screens';

import './core/themes/base';

export const AppNavigator = (): JSX.Element => {
  useColorScheme();
  const { navigation, i18n } = useServices();

  i18n.t('hello');

  return (
    <>
      <StatusBar />
      <NavigationContainer
        ref={navigation.n}
        onReady={navigation.onReady}
        onStateChange={navigation.onStateChange}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};
