import { Text as TextRN, TextProps } from 'react-native';
import React, { forwardRef } from 'react';
import { makeStyledComponent } from '../../utils/makeStyledComponent';
import { StyledProps } from '../../themes/styled-system';

const StyledText = makeStyledComponent(TextRN);

export interface InterfaceTextProps extends TextProps, StyledProps {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
}

export type TTextProps = InterfaceTextProps;

export const Text = forwardRef((props: TTextProps, ref: any) => {
  return <StyledText {...props} ref={ref} />;
});
