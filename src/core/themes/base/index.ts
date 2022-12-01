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

export type TBorders = `borders${keyof typeof borders}`;
export type TColors = `borders${keyof typeof colors}`;
export type TOpacity = `borders${keyof typeof opacity}`;
export type TRadii = `borders${keyof typeof radii}`;
export type TSpacing = `borders${keyof typeof spacing}`;
export type TTypography = `borders${keyof typeof typography}`;
export type TLineHeight = `borders${keyof typeof lineHeights}`;
export type TFontSizes = `borders${keyof typeof fontSizes}`;
export type TFontWeights = `borders${keyof typeof fontWeights}`;
export type TLetterSpacings = `borders${keyof typeof letterSpacings}`;
export type TThemes = keyof typeof themes;
