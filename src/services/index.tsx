import React from 'react';
import { NavigationService } from './navigation';
import { SystemService } from './system';
import { TranslateService } from './translate';

export const services = {
  i18n: new TranslateService(),
  navigation: new NavigationService(),
  system: new SystemService(),
};

type ContextServices = typeof services;

const servicesContext = React.createContext<ContextServices>(services);

export const ServicesProvider = ({ children }: any) => (
  <servicesContext.Provider value={services}>
    {children}
  </servicesContext.Provider>
);

export const useServices = (): ContextServices =>
  React.useContext(servicesContext);

export const initServices = async (): PVoid => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key];

      if (s.init) {
        await s.init();
      }
    }
  }
};
