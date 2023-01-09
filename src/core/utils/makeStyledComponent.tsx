import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useServices } from '../../services';
import { resolverPropsKeyStyle } from './resolverPropsKeyStyle';
export const makeStyledComponent = (Component: any) => {
  return React.forwardRef((props, ref: any) => {
    const { system } = useServices();

    const [styles, { style, ...restOther }] = useMemo(
      () => resolverPropsKeyStyle(props, system.getSourceTheme()),
      [props, system],
    );

    return (
      <Component
        style={[styles, StyleSheet.flatten(style)]}
        {...restOther}
        ref={ref}
      />
    );
  });
};
