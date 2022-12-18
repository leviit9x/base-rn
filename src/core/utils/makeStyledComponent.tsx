import React from 'react';
import {resolverPropsKeyStyle} from './resolverPropsKeyStyle';
export const makeStyledComponent = (Component: any) => {
  return React.forwardRef((props, ref: any) => {
    const [styles, other] = resolverPropsKeyStyle(props);
    return <Component {...other} style={styles} ref={ref} />;
  });
};
