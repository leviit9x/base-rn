import themeConfig from '../../../../schema.theme.json';

const colors = themeConfig.colors;
const fontSizes = themeConfig.fontSizes;
const fontWeights = themeConfig.fontWeights;
const radii = themeConfig.radii;
const spacing = themeConfig.spacing;
const opacity = themeConfig.opacity;
const sizes = themeConfig.sizes;
const zIndex = themeConfig.zIndex;

export const themes = {
  colors,
  opacity,
  radii,
  spacing,
  fontSizes,
  fontWeights,
  sizes,
  zIndex,
};

export const themePropertyMap: any = {
  radii: 'borderRadius',
  fontSizes: 'fontSize',
  fontWeights: 'fontWeight',
  opacity: 'opacity',
  zIndex: 'zIndex',
  color: 'color',
  bg: 'backgroundColor',
  // space: 'spacing',
  // sizes: 'sizes',
};

export type TColors = keyof typeof colors;
export type TOpacity = keyof typeof opacity;
export type TRadii = keyof typeof radii;
export type TSpacing = keyof typeof spacing;
export type TFontSizes = keyof typeof fontSizes;
export type TFontWeights = keyof typeof fontWeights;
export type TSizes = keyof typeof sizes;
export type TZIndex = keyof typeof zIndex;
export type TKeyThemes = keyof typeof themes;
