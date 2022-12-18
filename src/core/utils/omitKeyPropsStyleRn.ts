export function omitKeyPropsStyleRn(props: Dict) {
  // remove children prop
  let styleProps = {} as Dict;
  let otherProps = {} as Dict;

  Object.keys(props).forEach((k: keyof typeof props) => {
    if (typeof props[k] !== 'function' && k !== 'children') {
      styleProps[k] = props[k];
    } else {
      otherProps[k] = props[k];
    }
  });

  return [styleProps, otherProps];
}
