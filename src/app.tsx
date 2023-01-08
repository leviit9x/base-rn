import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useServices } from '@services';
import { RootNavigator } from '@screens';

export const AppNavigator = (): JSX.Element => {
  const { navigation } = useServices();

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
