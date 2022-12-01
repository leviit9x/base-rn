import {
  themeMeasureToken,
  TBorderWidth,
  borderMeasureTokenName,
  borderMeasureToken,
  TBorderMeasureKey,
  themeKey,
} from '../../shared';

const borderWidth = {} as TBorderWidth;

borderMeasureToken.forEach(k => {
  themeMeasureToken.forEach(t => {
    let key = `${themeKey.borders}-${k}${t}` as TBorderMeasureKey;
    let keyStyle = borderMeasureTokenName[k];
    borderWidth[key] = {
      [keyStyle]: t,
    };
  });
});

const borderWidths = {
  '0': 0,
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '8': '8px',
};

export type IBorderWidth = keyof typeof borderWidths;

export default borderWidths;

export {borderWidth};
