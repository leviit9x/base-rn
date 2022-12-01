// SERVICES
interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

// FUNCTIONS
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;

// SYSTEMS
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Russian';
type ColorMode = 'light' | 'dark' | null | undefined;
type Language = 'en' | 'vi';

// CORE
type CoreThemeKey =
  | 'borders'
  | 'colors'
  | 'opacity'
  | 'radius'
  | 'shadows'
  | 'sizes'
  | 'spaces'
  | 'typography';

type IColorHues = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Leaves<T> = T extends object
  ? {[K in keyof T]-?: Join<K, Leaves<T[K]>>}[keyof T]
  : '';
