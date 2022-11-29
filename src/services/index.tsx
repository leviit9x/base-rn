import {NavigationService} from './navigation';
import {TranslateService} from './translate';

export const services = {
  i18n: new TranslateService(),
  navigation: new NavigationService(),
};
