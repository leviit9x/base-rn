import { Text as TextRN, TextProps } from 'react-native';
import React, { forwardRef } from 'react';
import { makeStyledComponent } from '../../utils/makeStyledComponent';
import { TStyledProps } from '../../themes/styled-system';
import { _textProps } from '../../themes/components';

const StyledText = makeStyledComponent(TextRN);

export const Text = forwardRef<
  React.LegacyRef<TextRN> | undefined,
  TStyledProps<TextProps>
>((props, ref) => {
  return <StyledText {..._textProps} {...props} ref={ref} />;
});
