import { themeSchema } from './themeSchema';
import { themeTs } from './themeTs';

const colors = themeTs.colors;
const fontSizes = themeTs.fontSizes;
const fontWeights = themeTs.fontWeights;
const radii = themeTs.radii;
const spacing = themeTs.spacing;
const opacity = themeTs.opacity;
const sizes = themeTs.sizes;
const zIndex = themeTs.zIndex;

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

export type TColors = keyof typeof colors;
export type TOpacity = keyof typeof opacity;
export type TRadii = keyof typeof radii;
export type TSpacing = keyof typeof spacing;
export type TFontSizes = keyof typeof fontSizes;
export type TFontWeights = keyof typeof fontWeights;
export type TSizes = keyof typeof sizes;
export type TZIndex = keyof typeof zIndex;
export type TKeyThemes = keyof typeof themes;
export type TypeofTheme = typeof themes;
export interface ITheme extends TypeofTheme {}
export type ITruthyKeyProps = NestedKeyOf<ITheme>;
export type SchemaThemeVariant = keyof typeof themeSchema;
