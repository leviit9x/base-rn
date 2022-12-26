import {
  genRootNavigator,
  genTabNavigator,
  genStackNavigator,
} from './../services/navigation/help';

import {
  ScreenLayouts,
  TabScreenLayouts,
  ModalScreenLayouts,
} from '../services/navigation/types';
import { AppScreen, AppTab, AppModal, Tabs, Modals } from './types';
export * from './types';

import { HomeScreen } from './HomeScreen';
import { NotificationScreen } from './NotificationScreen';
import { ProfileScreen } from './ProfileScreen';
import ModalExample from './Modal/ModalExample';

// Screens
const screens: ScreenLayouts = {
  HOME_SCREEN: {
    name: AppScreen.HOME_SCREEN,
    component: HomeScreen,
    options: () => ({ title: AppScreen.HOME_SCREEN }),
  },
  NOTIFICATION_SCREEN: {
    name: AppScreen.NOTIFICATION_SCREEN,
    component: NotificationScreen,
    options: () => ({ title: AppScreen.NOTIFICATION_SCREEN }),
  },
  PROFILE_SCREEN: {
    name: AppScreen.PROFILE_SCREEN,
    component: ProfileScreen,
    options: () => ({ title: AppScreen.PROFILE_SCREEN }),
  },
};

// Modals
const modals: ModalScreenLayouts = {
  COMMON_ERROR_MODAL: {
    name: AppModal.COMMON_ERROR_MODAL,
    component: ModalExample,
    options: () => ({
      title: AppModal.COMMON_ERROR_MODAL,
    }),
  },
};

// Stack
const HomeStack = () => genStackNavigator([screens.HOME_SCREEN]);
const NotificationStack = () =>
  genStackNavigator([screens.NOTIFICATION_SCREEN]);
const ProfileStack = () => genStackNavigator([screens.PROFILE_SCREEN]);

// Tabs
const tabs: TabScreenLayouts = {
  MAIN_TAB: {
    name: AppTab.MAIN_TAB,
    component: HomeStack,
    options: () => ({
      title: AppTab.MAIN_TAB,
    }),
  },
  NOTIFICATION_TAB: {
    name: AppTab.NOTIFICATION_TAB,
    component: NotificationStack,
    options: () => ({
      title: AppTab.NOTIFICATION_TAB,
    }),
  },
  SETTINGS_TAB: {
    name: AppTab.SETTINGS_TAB,
    component: ProfileStack,
    options: () => ({
      title: AppTab.SETTINGS_TAB,
    }),
  },
};

const TabNavigator = () =>
  genTabNavigator([...Object.keys(tabs).map(k => tabs[k as Tabs])], {});

// Root Navigator
export const RootNavigator = (): JSX.Element =>
  genRootNavigator(TabNavigator, [
    ...Object.keys(modals).map(k => modals[k as Modals]),
  ]);
