export enum AppLocale {
  VN = 'vi',
  EN = 'en',
}

export type TAppLang = AppLocale.VN | AppLocale.EN;

export type TLangResource = Record<TAppLang, Record<'translation', any>>;
