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

export {borderWidth};
