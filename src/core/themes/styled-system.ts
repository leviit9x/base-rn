import { convertDataToString, convertStringNumberToNumber } from '../utils';
import { ITheme, TKeyThemes } from './base';
import { CSSProperties } from 'react';
import { ViewStyle, ImageStyle, TextStyle, ViewProps } from 'react-native';

export const layout = {
  width: {
    property: 'width',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  w: {
    property: 'width',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  height: {
    property: 'height',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  h: {
    property: 'height',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  minWidth: {
    property: 'minWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  minW: {
    property: 'minWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  minHeight: {
    property: 'minHeight',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  minH: {
    property: 'minHeight',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  maxWidth: {
    property: 'maxWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  maxW: {
    property: 'maxWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  maxHeight: {
    property: 'maxHeight',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  maxH: {
    property: 'maxHeight',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  textAlign: true,
} as const;

export const flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
} as const;

export const position = {
  position: true,
  zIndex: {
    property: 'zIndex',
    keyTheme: 'zIndex',
    transformer: convertStringNumberToNumber,
  },
  top: {
    property: 'top',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  right: {
    property: 'right',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  bottom: {
    property: 'bottom',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  left: {
    property: 'left',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
} as const;

export const color = {
  color: {
    property: 'color',
    keyTheme: 'colors',
  },
  tintColor: {
    property: 'tintColor',
    keyTheme: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    keyTheme: 'colors',
  },
  opacity: {
    property: 'opacity',
    keyTheme: 'opacity',
    transformer: convertStringNumberToNumber,
  },
  bg: {
    property: 'backgroundColor',
    keyTheme: 'colors',
  },
  bgColor: {
    property: 'backgroundColor',
    keyTheme: 'colors',
  },
  background: {
    property: 'backgroundColor',
    keyTheme: 'colors',
  },
  textDecorationColor: {
    property: 'textDecorationColor',
    keyTheme: 'colors',
  },
} as const;

export const border = {
  borderWidth: {
    property: 'borderWidth',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  borderStyle: true,
  borderColor: {
    property: 'borderColor',
    keyTheme: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },

  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderLeftRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderRightRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  borderTopColor: {
    property: 'borderTopColor',
    keyTheme: 'colors',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    keyTheme: 'colors',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    keyTheme: 'colors',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    keyTheme: 'sizes',
    transformer: convertStringNumberToNumber,
  },
  borderRightColor: {
    property: 'borderRightColor',
    keyTheme: 'colors',
  },
  rounded: {
    property: 'borderRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },

  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },

  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },

  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },

  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },

  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
    transformer: convertStringNumberToNumber,
  },
} as const;

export const space = {
  margin: {
    property: 'margin',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  m: {
    property: 'margin',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  marginTop: {
    property: 'marginTop',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  mt: {
    property: 'marginTop',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  marginRight: {
    property: 'marginRight',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  mr: {
    property: 'marginRight',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  marginBottom: {
    property: 'marginBottom',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  mb: {
    property: 'marginBottom',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  marginLeft: {
    property: 'marginLeft',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  ml: {
    property: 'marginLeft',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  padding: {
    property: 'padding',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  p: {
    property: 'padding',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  paddingTop: {
    property: 'paddingTop',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  pt: {
    property: 'paddingTop',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  paddingRight: {
    property: 'paddingRight',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  pr: {
    property: 'paddingRight',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  paddingBottom: {
    property: 'paddingBottom',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  pb: {
    property: 'paddingBottom',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  paddingLeft: {
    property: 'paddingLeft',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  pl: {
    property: 'paddingLeft',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
} as const;

export const typography = {
  fontSize: {
    property: 'fontSize',
    keyTheme: 'fontSizes',
    transformer: convertStringNumberToNumber,
  },
  fontWeight: {
    property: 'fontWeight',
    keyTheme: 'fontWeights',
    transformer: convertDataToString,
  },
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: { property: 'textDecorationLine' },
  txtDecor: { property: 'textDecorationLine' },
  textDecorationLine: true,
} as const;

export const propConfig = {
  ...color,
  ...space,
  ...layout,
  ...flexbox,
  ...border,
  ...position,
  ...typography,
} as const;

export const propTruthyConfig = {
  bg: {
    property: 'backgroundColor',
    keyTheme: 'colors' as TKeyThemes,
    transformer: undefined,
  },
  color: {
    property: 'color',
    keyTheme: 'colors' as TKeyThemes,
    transformer: undefined,
  },
  opacity: {
    property: 'opacity',
    keyTheme: 'opacity' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  radii: {
    property: 'borderRadius',
    keyTheme: 'radii' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  margin: {
    property: 'margin',
    keyTheme: 'spacing' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  padding: {
    property: 'padding',
    keyTheme: 'spacing' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  fontSize: {
    property: 'fontSize',
    keyTheme: 'fontSizes' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  fontWeight: {
    property: 'fontWeight',
    keyTheme: 'fontWeights' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  zIndex: {
    property: 'zIndex',
    keyTheme: 'zIndex' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  width: {
    property: 'width',
    keyTheme: 'sizes' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
  height: {
    property: 'height',
    keyTheme: 'sizes' as TKeyThemes,
    transformer: convertStringNumberToNumber,
  },
} as const;

export type ThemePropKey = keyof typeof propConfig;
export type ThemeTruthyKey = keyof typeof propTruthyConfig;
type StyledPropTruthyConfig = typeof propTruthyConfig;
type StyledPropConfig = typeof propConfig;
type RNStyles = ViewStyle & ImageStyle & TextStyle;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

export type ColorType = Leaves<ITheme['colors'] | (string & {})>;

type GetThemeScaleValues<T extends keyof ITheme> = 'colors' extends T
  ? ColorType
  : keyof ITheme[T] | (string & {}) | (number & {});

type GetRNStyles<key, scale = null> = scale extends keyof ITheme
  ? GetThemeScaleValues<scale>
  : key extends keyof CSSProperties
  ? CSSProperties[key]
  : key extends keyof RNStyles
  ? RNStyles[key]
  : unknown;

type AllProps<T extends StyledPropConfig> = {
  [key in Extract<keyof T, string>]?: T[key] extends boolean
    ? GetRNStyles<key>
    : T[key] extends { property: any; keyTheme: any }
    ? GetRNStyles<T[key]['property'], T[key]['keyTheme']>
    : T[key] extends { properties: any; keyTheme: any }
    ? T[key]['properties'] extends { '0': string }
      ? GetRNStyles<T[key]['properties']['0'], T[key]['keyTheme']>
      : unknown
    : unknown;
};

type GetTruthyPropsKey<T extends TKeyThemes> = T extends TKeyThemes
  ? keyof ITheme[T]
  : unknown;

export type TTruthyStyleProps = {
  [key in keyof StyledPropTruthyConfig as `${key}-${GetTruthyPropsKey<
    StyledPropTruthyConfig[key]['keyTheme']
  >}`]?: boolean;
};

export type StyledProps = Omit<
  AllProps<StyledPropConfig>,
  | 'gap'
  | 'verticalAlign'
  | 'borderBottom'
  | 'borderTop'
  | 'borderLeft'
  | 'borderRight'
  | 'wordBreak'
  | 'justifySelf'
  | 'overflowWrap'
  | 'textOverflow'
  | 'whiteSpace'
  | 'outline'
  | 'outlineWidth'
  | 'cursor'
  | 'userSelect'
  | 'order'
  | 'backgroundSize'
  | 'backgroundPosition'
  | 'backgroundRepeat'
  | 'backgroundAttachment'
  | 'backgroundBlendMode'
  | 'bgSize'
  | 'bgPosition'
  | 'bgRepeat'
  | 'bgAttachment'
  | 'bgBlendMode'
  | 'bgImage'
  | 'bgImg'
  | 'bgPos'
>;

export interface InterfaceStyledProps
  extends UnionToIntersection<StyledProps | TTruthyStyleProps> {
  /**
   * Renders components as children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
}

export type TStyledProps<T extends ViewProps> = T & InterfaceStyledProps;
