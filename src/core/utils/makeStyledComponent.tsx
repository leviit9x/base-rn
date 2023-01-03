import React, { useMemo } from 'react';
import { useServices } from '../../services';
import { resolverPropsKeyStyle } from './resolverPropsKeyStyle';
export const makeStyledComponent = (Component: any) => {
  return React.forwardRef((props, ref: any) => {
    const { system } = useServices();

    const [styles, other] = useMemo(
      () => resolverPropsKeyStyle(props, system.getSourceTheme()),
      [props, system],
    );
    return <Component {...other} style={styles} ref={ref} />;
  });
};
