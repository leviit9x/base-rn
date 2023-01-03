import { Text as TextRN, TextProps } from 'react-native';
import React, { forwardRef } from 'react';
import { makeStyledComponent } from '../../utils/makeStyledComponent';
import { TStyledProps } from '../../themes/styled-system';

const StyledText = makeStyledComponent(TextRN);

export const Text = forwardRef((props: TStyledProps<TextProps>, ref: any) => {
  return <StyledText {...props} ref={ref} />;
});
