import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {Modals, Screens, ScreenProps, Tabs} from '../../screens';
import {BackBehavior} from '@react-navigation/routers/lib/typescript/src/TabRouter';
import {
  EventMapBase,
  ParamListBase,
  RouteProp,
  ScreenListeners,
} from '@react-navigation/native';
import {StyleProp, ViewStyle} from 'react-native';

type BaseScreenInfo = {
  name: string;
  component: React.FC<NativeStackScreenProps<ScreenProps>>; // idk why it doesn't work
};

type ScreenInfo = BaseScreenInfo & {
  options: () => NativeStackNavigationOptions;
};

export type ScreenLayouts = {
  [key in Screens]: ScreenInfo;
};

export type GenStackNavigatorProps = ScreenInfo[];

export type TabScreenInfo = BaseScreenInfo & {
  options: () => BottomTabNavigationOptions;
};

export type TabScreenLayouts = {
  [key in Tabs]: TabScreenInfo;
};

export type GenTabNavigatorProps = TabScreenInfo[];

export type ModalScreenInfo = ScreenInfo;

export type ModalScreenLayouts = {
  [key in Modals]: ScreenInfo;
};

export type GenStackNavigatorOptions = {
  backBehavior?: BackBehavior | undefined;
  defaultScreenOptions?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
        options: BottomTabNavigationOptions;
      }) => BottomTabNavigationOptions)
    | undefined;

  detachInactiveScreens?: boolean | undefined;
  initialRouteName?: string | undefined;
  safeAreaInsets?:
    | {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
      }
    | undefined;
  sceneContainerStyle?: StyleProp<ViewStyle>;
  screenListeners?:
    | ScreenListeners<any, EventMapBase>
    | ((props: {
        route: RouteProp<ParamListBase>;
        navigation: any;
      }) => ScreenListeners<any, EventMapBase>);
  tabBar?: ((props: BottomTabBarProps) => React.ReactNode) | undefined;
};
