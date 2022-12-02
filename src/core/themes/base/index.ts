import themeConfig from '../../../../schema.theme.json';

export const borders = themeConfig.borders;
export const colors = themeConfig.colors;
export const opacity = themeConfig.opacity;
export const radii = themeConfig.radii;
export const spacing = themeConfig.spacing;
export const typography = themeConfig.typography;
export const fontSizes = themeConfig.typography.fontSizes;
export const fontWeights = themeConfig.typography.fontWeights;
export const letterSpacings = themeConfig.typography.letterSpacings;
export const lineHeights = themeConfig.typography.lineHeights;

export const themes = {
  borders,
  colors,
  opacity,
  radii,
  spacing,
  typography,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
};

export type TBorders = `borders-${keyof typeof borders}`;
export type TColors = `colors-${keyof typeof colors}`;
export type TOpacity = `opacity-${keyof typeof opacity}`;
export type TRadii = `raddi-${keyof typeof radii}`;
export type TSpacing = `spacing-${keyof typeof spacing}`;
export type TTypography = `typo-${keyof typeof typography}`;
export type TLineHeight = `lineHeight-${keyof typeof lineHeights}`;
export type TFontSizes = `fontSizes-${keyof typeof fontSizes}`;
export type TFontWeights = `fontWeights-${keyof typeof fontWeights}`;
export type TLetterSpacings = `letterSpacings-${keyof typeof letterSpacings}`;
export type TThemes = keyof typeof themes;
