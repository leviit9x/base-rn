// SERVICES
interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

// FUNCTIONS
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;
type ArgsFunc<T = any> = (...args: T) => void;

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

type Dict = Record<string, any>;
type Tuple<A = Dict, B = A> = [A, B];
