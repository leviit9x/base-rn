import { get } from 'lodash';
import { TKeyThemes, TypeofTheme } from '../themes';
import {
  propConfig,
  propTruthyConfig,
  ThemePropKey,
  ThemeTruthyKey,
} from '../themes/styled-system';
import { omitKeyPropsStyleRn } from './omitKeyPropsStyleRn';

function resolveTransformer(val: any, transformer?: ArgsFunc) {
  return transformer ? transformer(val) : val;
}

export function resolverPropsKeyStyle(
  props: any,
  themeConfig: TypeofTheme,
): Tuple {
  // remove children prop
  const [stylesProps, otherProps] = omitKeyPropsStyleRn(props);
  console.log('===stylesProps', stylesProps);

  const dataSet = {} as Dict;

  // example properties
  // flex={1} alignItems={'center'}
  // color={"green.500"} fontSize={'xl'}
  // bg-dark-500 raddi-xl

  Object.keys(stylesProps).forEach((k: string) => {
    Object.assign(dataSet, transformMapKey(k, stylesProps, themeConfig));
  });

  return [dataSet, otherProps];
}

function transformMapKey(k: string, origin: any, themeConfig: TypeofTheme) {
  const result = {} as Dict;
  const _valOfKey = origin[k];

  if (typeof _valOfKey === 'boolean') {
    const [keyTheme, ...restPath] = k.split('-') as [ThemeTruthyKey, any];
    const mapConfig = propTruthyConfig[keyTheme] as any;

    if (typeof mapConfig === 'object') {
      const val = get(
        themeConfig[mapConfig.keyTheme as TKeyThemes],
        restPath.join('.'),
      );

      result[mapConfig.property] = resolveTransformer(
        val,
        mapConfig.transformer,
      );
    } else {
      result[k] = origin[k];
    }
  } else {
    const mapPropConfig = propConfig[k as ThemePropKey] as any;

    if (typeof mapPropConfig === 'boolean') {
      result[k] = origin[k];
    } else if (typeof mapPropConfig === 'object') {
      const mapTheme = themeConfig[mapPropConfig.keyTheme as TKeyThemes] as any;
      let val = get(mapTheme, origin[k]) ?? origin[k];
      // sometime have two properties in one key
      if (!mapPropConfig.property && mapPropConfig.properties) {
        // borderLeftRadius={10} => ['borderTopLeftRadius', 'borderBottomLeftRadius']
        mapPropConfig.properties.forEach((pk: string) => {
          result[pk] = resolveTransformer(val, mapPropConfig.transformer);
        });
      } else {
        // borderRadius={10} => borderRadius
        result[mapPropConfig.property] = resolveTransformer(
          val,
          mapPropConfig.transformer,
        );
      }
    }
  }

  return result;
}
