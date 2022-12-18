import {transparentize} from './tools/colors';
import {get} from 'lodash';
import {convertDataToString, convertStringNumberToNumber} from '../utils';

export const getColor = (rawValue: any, keyTheme: any, theme: any) => {
  const alphaMatched =
    typeof rawValue === 'string' ? rawValue?.match(/:alpha\.\d\d?\d?/) : false;

  if (alphaMatched) {
    const colorMatched = rawValue?.match(/^.*?(?=:alpha)/);
    const color = colorMatched ? colorMatched[0] : colorMatched;
    const alphaValue = alphaMatched[0].split('.')[1];
    const alphaFromToken = get(theme.opacity, alphaValue, alphaValue);
    const alpha = alphaFromToken ? parseFloat(alphaFromToken) : 1;
    const newColor = transparentize(color, alpha)(theme);
    return newColor;
  } else {
    return get(keyTheme, rawValue, rawValue);
  }
};

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
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  right: {
    property: 'right',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  bottom: {
    property: 'bottom',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  left: {
    property: 'left',
    keyTheme: 'space',
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
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  borderTopColor: {
    property: 'borderTopColor',
    keyTheme: 'colors',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    keyTheme: 'colors',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    keyTheme: 'spacing',
    transformer: convertStringNumberToNumber,
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    keyTheme: 'colors',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    keyTheme: 'borderWidths',
  },
  borderRightColor: {
    property: 'borderRightColor',
    keyTheme: 'colors',
  },
  rounded: {
    property: 'borderRadius',
    keyTheme: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    keyTheme: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    keyTheme: 'radii',
  },

  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    keyTheme: 'radii',
  },

  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    keyTheme: 'radii',
  },

  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    keyTheme: 'radii',
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
  },

  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    keyTheme: 'radii',
  },

  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    keyTheme: 'radii',
  },
} as const;

export const space = {
  margin: {
    property: 'margin',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  m: {
    property: 'margin',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  marginTop: {
    property: 'marginTop',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  mt: {
    property: 'marginTop',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  marginRight: {
    property: 'marginRight',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  mr: {
    property: 'marginRight',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  marginBottom: {
    property: 'marginBottom',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  mb: {
    property: 'marginBottom',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  marginLeft: {
    property: 'marginLeft',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  ml: {
    property: 'marginLeft',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  padding: {
    property: 'padding',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  p: {
    property: 'padding',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  paddingTop: {
    property: 'paddingTop',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  pt: {
    property: 'paddingTop',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  paddingRight: {
    property: 'paddingRight',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  pr: {
    property: 'paddingRight',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  paddingBottom: {
    property: 'paddingBottom',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  pb: {
    property: 'paddingBottom',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  paddingLeft: {
    property: 'paddingLeft',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  pl: {
    property: 'paddingLeft',
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    keyTheme: 'space',
    transformer: convertStringNumberToNumber,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    keyTheme: 'space',
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
  textDecoration: {property: 'textDecorationLine'},
  txtDecor: {property: 'textDecorationLine'},
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

export type ThemePropKey = keyof typeof propConfig;

export const propTruthyConfig = {
  bg: {
    property: 'backgroundColor',
    themeKey: 'colors',
    transformer: undefined,
  },
  color: {
    property: 'color',
    themeKey: 'colors',
    transformer: undefined,
  },
  opacity: {
    property: 'opacity',
    transformer: convertStringNumberToNumber,
    themeKey: 'opacity',
  },
  radii: {
    property: 'borderRadius',
    themeKey: 'radii',
    transformer: convertStringNumberToNumber,
  },
  fontSize: {
    property: 'fontSize',
    themeKey: 'fontSizes',
    transformer: convertStringNumberToNumber,
  },
  fontWeights: {
    property: 'fontWeight',
    themeKey: 'fontWeight',
    transformer: convertStringNumberToNumber,
  },
  zIndex: {
    property: 'zIndex',
    themeKey: 'zIndex',
    transformer: convertStringNumberToNumber,
  },
};

export type ThemeTruthyPropKey = keyof typeof propTruthyConfig;

export type TComponentTheme = Record<ThemePropKey, any> &
  Record<ThemeTruthyPropKey, any>;
