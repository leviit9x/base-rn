import {ColorValue} from 'react-native';

export const themeMeasureToken = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 52, 72, 80,
  96, 124, 256,
] as const;

export const themeKey: Record<Partial<CoreThemeKey>, CoreThemeKey> = {
  borders: 'borders', // x
  colors: 'colors',
  opacity: 'opacity',
  shadows: 'shadows',
  sizes: 'sizes',
  spaces: 'spaces', // x
  typography: 'typography', // x
  radius: 'radius',
};

Object.freeze(themeMeasureToken);
Object.freeze(themeKey);
export type TThemeKey = typeof themeKey;
export type TShortThemeMeasureToken = typeof themeMeasureToken[number];

//================BORDER================

export const borderMeasureToken = [
  'Ber',
  'Blr',
  'Brr',
  'Bsr',
  'Bw',
  'Ew',
  'Lw',
  'R',
  'Rw',
  'Sw',
  'Ter',
  'Tlr',
  'Trr',
  'Tsr',
  'Tw',
  'W',
] as const;

export const borderCoreToken = [
  'Bc',
  'C',
  'Ec',
  'Lc',
  'Rc',
  'Sc',
  'Tc',
] as const;

type TShortMeasureBorderToken = typeof borderMeasureToken[number];
type TShortCoreBorderToken = typeof borderCoreToken[number];
type CSSBorderKey =
  | 'borderBottomEndRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomStartRadius'
  | 'borderBottomWidth'
  | 'borderEndWidth'
  | 'borderLeftWidth'
  | 'borderRadius'
  | 'borderRightWidth'
  | 'borderStartWidth'
  | 'borderTopEndRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderTopStartRadius'
  | 'borderTopWidth'
  | 'borderWidth';

export const borderMeasureTokenName: Record<
  TShortMeasureBorderToken,
  CSSBorderKey
> = {
  Ber: 'borderBottomEndRadius',
  Blr: 'borderBottomLeftRadius',
  Brr: 'borderBottomRightRadius',
  Bsr: 'borderBottomStartRadius',
  Bw: 'borderBottomWidth',
  Ew: 'borderEndWidth',
  Lw: 'borderLeftWidth',
  R: 'borderRadius',
  Rw: 'borderRightWidth',
  Sw: 'borderStartWidth',
  Ter: 'borderTopEndRadius',
  Tlr: 'borderTopLeftRadius',
  Trr: 'borderTopRightRadius',
  Tsr: 'borderTopStartRadius',
  Tw: 'borderTopWidth',
  W: 'borderWidth',
};

export const borderCoreTokenName: Record<TShortCoreBorderToken, string> = {
  Bc: 'borderBottomColor',
  C: 'borderColor',
  Ec: 'borderEndColor',
  Lc: 'borderLeftColor',
  Rc: 'borderRightColor',
  Sc: 'borderStartColor',
  Tc: 'borderTopColor',
};

export type TBorderMeasureKey =
  `border${TShortMeasureBorderToken}${TShortThemeMeasureToken}`;

export type TBorderCoreKey = `border${TShortCoreBorderToken}`;

export type TBorderWidth = Record<
  TBorderMeasureKey,
  Record<string, number | undefined>
>;

export type TBoderCore = Record<
  TBorderCoreKey,
  Record<string, ColorValue | undefined>
>;

export type TBorderStyle = 'solid' | 'dotted' | 'dashed' | undefined;

export type TBorderTheme = TBorderWidth &
  TBoderCore & {
    borderStyle: TBorderStyle;
  };

//================BORDER================
