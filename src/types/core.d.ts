interface IService {
  init: () => PVoid;
}

type Services = Record<string, IService>;

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;

type Language = 'en' | 'vi';

// STORES
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Russian';

// Settings
type AppearanceAction = {
  name: UIAppearance;
};

type LanguageAction = {
  name: UILanguage;
};
