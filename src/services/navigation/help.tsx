import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {merge} from 'lodash';
import {screenDefaultOptions, tabBarDefaultOptions} from './options';
import {
  GenStackNavigatorProps,
  GenTabNavigatorProps,
  ModalScreenInfo,
} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const genStackNavigator = (
  screens: GenStackNavigatorProps,
): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const stackScreens = screens.map(it => (
    <Stack.Screen
      key={it.name}
      name={it.name}
      component={it.component}
      options={merge(screenDefaultOptions(), it.options())}
    />
  ));

  return <Stack.Navigator>{stackScreens}</Stack.Navigator>;
};

export const genTabNavigator = (screens: GenTabNavigatorProps): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const tabScreens = screens.map(it => (
    <Tab.Screen
      key={it.name}
      name={it.name}
      component={it.component}
      options={it.options()}
    />
  ));

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...tabBarDefaultOptions(route.name),
      })}>
      {tabScreens}
    </Tab.Navigator>
  );
};

export const genRootNavigator = (
  app: React.FC,
  modals: ModalScreenInfo[],
): JSX.Element => {
  const RootStack = createNativeStackNavigator();
  const appScreen = <RootStack.Screen name="App" component={app} />;
  const modalScreens = modals.map(m => (
    <RootStack.Screen key={m.name} name={m.name} component={m.component} />
  ));

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Group>{appScreen}</RootStack.Group>

      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        {modalScreens}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
