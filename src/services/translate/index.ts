import I18n, {i18n, LanguageDetectorAsyncModule} from 'i18next';
import * as RNLocalize from 'react-native-localize';
import {en, vi} from './locales';
import {initReactI18next} from 'react-i18next';
import moment from 'moment';
import {AppLocale, TLangResource} from './types';

export const resources: TLangResource = {
  vi: {
    translation: vi,
  },
  en: {
    translation: en,
  },
};

export class TranslateService implements IService {
  private inited = false;
  private _i18n: i18n = I18n;
  public t = this._i18n.t;

  init = async (): PVoid => {
    if (!this.inited) {
      this.setup();
      this.inited = true;
    }
  };

  private setup = (): void => {
    const languageDetector: LanguageDetectorAsyncModule = {
      type: 'languageDetector',
      async: true,
      detect: callback => {
        return callback(RNLocalize.getLocales()[0].languageCode);
      },
      init: function (): void {},
      cacheUserLanguage: function (): void {},
    };

    I18n.use(languageDetector)
      .use(initReactI18next)
      .init({
        compatibilityJSON: 'v3', // <---- https://www.i18next.com/misc/migration-guide
        fallbackLng: AppLocale.VN,
        resources,
        // debug: envConfigs.isDev,
        lng: AppLocale.VN,
        load: 'all',
        ns: ['translation'],
        defaultNS: 'translation',
        react: {useSuspense: false},
        returnEmptyString: false,
        interpolation: {
          escapeValue: false,
          format(value, format) {
            if (value instanceof Date) {
              const convertDate = moment(value).format(format);
              return convertDate;
            }
            return value;
          },
        },
      });

    this._i18n = I18n;
  };
}
