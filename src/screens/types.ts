// Describe your screens here
export type Tabs = 'MAIN_TAB' | 'NOTIFICATION_TAB' | 'SETTINGS_TAB';
export type Modals = 'COMMON_ERROR_MODAL';
export type Screens = 'HOME_SCREEN' | 'PROFILE_SCREEN' | 'NOTIFICATION_SCREEN';

export enum AppScreen {
  HOME_SCREEN = 'HOME_SCREEN',
  PROFILE_SCREEN = 'PROFILE_SCREEN',
  NOTIFICATION_SCREEN = 'NOTIFICATION_SCREEN',
}

export enum AppTab {
  MAIN_TAB = 'MAIN_TAB',
  NOTIFICATION_TAB = 'NOTIFICATION_TAB',
  SETTINGS_TAB = 'SETTINGS_TAB',
}

export enum AppModal {
  COMMON_ERROR_MODAL = 'COMMON_ERROR_MODAL',
}

export type ModalProps = {
  [AppModal.COMMON_ERROR_MODAL]: undefined;
};

export type ScreenProps = {
  [AppScreen.HOME_SCREEN]: undefined;
  [AppScreen.PROFILE_SCREEN]: undefined;
  [AppScreen.PROFILE_SCREEN]: undefined;
} & ModalProps;
