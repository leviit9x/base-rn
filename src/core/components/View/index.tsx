import React, { forwardRef } from 'react';
import { View as ViewRN, ViewProps } from 'react-native';
import { StyledProps } from '../../themes/styled-system';
import { makeStyledComponent } from '../../utils/makeStyledComponent';

const StyledView = makeStyledComponent(ViewRN);

export interface InterfaceViewProps extends ViewProps, StyledProps {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
}

export type TViewProps = InterfaceViewProps;

export const View = forwardRef((props: TViewProps, ref: any) => {
  return <StyledView {...props} ref={ref} />;
});
