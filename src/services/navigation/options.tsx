import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTintColor: 'lightblue',

  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerLargeTitle: true,
      headerTransparent: true,
      headerBlurEffect: 'regular',
    },
  }),
});

export const tabBarDefaultOptions = (
  routeName: string,
): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarActiveTintColor: 'lightblue',
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    backgroundColor: 'lightblue',
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: ({focused, color, size}) => (
    <Icon name={getIconName(routeName, focused)} size={size} color={color} />
  ),
});

const getIconName = (routeName: string, focused: boolean): string => {
  if (routeName === 'MainNavigator') {
    return focused ? 'newspaper' : 'newspaper-outline';
  }
  if (routeName === 'ExampleNavigator') {
    return focused ? 'construct' : 'construct-outline';
  }
  if (routeName === 'SettingsNavigator') {
    return focused ? 'cog' : 'cog-outline';
  }

  return 'list';
};
