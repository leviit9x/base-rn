import { isNil, omit, omitBy } from 'lodash';

export const stylingProps = {
  margin: [
    'margin',
    'm',
    'marginTop',
    'mt',
    'marginRight',
    'mr',
    'marginBottom',
    'mb',
    'marginLeft',
    'ml',
    'marginX',
    'mx',
    'marginY',
    'my',
  ],
  padding: [
    'padding',
    'p',
    'paddingTop',
    'pt',
    'paddingRight',
    'pr',
    'paddingBottom',
    'pb',
    'paddingLeft',
    'pl',
    'paddingX',
    'px',
    'paddingY',
    'py',
  ],
  border: [
    'border',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'borderTop',
    'borderTopWidth',
    'borderTopStyle',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderRight',
    'borderRightWidth',
    'borderRightStyle',
    'borderRightColor',
    'borderBottom',
    'borderBottomWidth',
    'borderBottomStyle',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderLeft',
    'borderLeftWidth',
    'borderLeftStyle',
    'borderLeftColor',
    'borderX',
    'borderY',
    'rounded',
  ],
  layout: [
    'width',
    'w',
    'height',
    'h',
    'display',
    'minWidth',
    'minW',
    'minH',
    'minHeight',
    'maxWidth',
    'maxW',
    'maxHeight',
    'maxH',
    'size',
    'verticalAlign',
    'overflow',
    'overflowX',
    'overflowY',
  ],
  flexbox: [
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexDirection',
    'flex',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'justifySelf',
    'alignSelf',
    'order',
  ],
  position: ['position', 'zIndex', 'top', 'right', 'bottom', 'left'],
  outline: ['outlineWidth', 'outlineColor', 'outlineStyle'],
  background: ['bg', 'backgroundColor', 'bgColor'],
};

export function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}

export function getRandomString(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function orderedPick(obj: any, values: any) {
  const ret: any = {};
  Object.keys(obj).forEach((key: string) => {
    if (values.includes(key)) {
      ret[key] = obj[key];
    }
  });
  return ret;
}

export function orderedExtractInObject(parent: any, values: Array<string>) {
  return [
    omitUndefined(orderedPick(parent, values)),
    omitUndefined(omit(parent, values)),
  ];
}
