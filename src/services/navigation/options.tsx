import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { AppTab } from '../../screens';

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
    backgroundColor: 'orange',
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: ({ focused, size }) => (
    <Icon name={getIconName(routeName, focused)} size={size} />
  ),
});

const getIconName = (routeName: string, focused: boolean): string => {
  if (routeName === AppTab.MAIN_TAB) {
    return focused ? 'home' : 'home-outline';
  }
  if (routeName === AppTab.NOTIFICATION_TAB) {
    return focused ? 'notifications' : 'notifications-outline';
  }
  if (routeName === AppTab.SETTINGS_TAB) {
    return focused ? 'cog' : 'cog-outline';
  }
  return 'list';
};
