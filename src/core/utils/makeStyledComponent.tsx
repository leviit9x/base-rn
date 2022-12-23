import React, {useMemo} from 'react';
import {resolverPropsKeyStyle} from './resolverPropsKeyStyle';
export const makeStyledComponent = (Component: any) => {
  return React.forwardRef((props, ref: any) => {
    const [styles, other] = useMemo(
      () => resolverPropsKeyStyle(props),
      [props],
    );
    return <Component {...other} style={styles} ref={ref} />;
  });
};
