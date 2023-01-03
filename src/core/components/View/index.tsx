import React, { forwardRef } from 'react';
import { View as ViewRN, ViewProps } from 'react-native';
import { TStyledProps } from '../../themes/styled-system';
import { makeStyledComponent } from '../../utils/makeStyledComponent';

const StyledView = makeStyledComponent(ViewRN);

export const View = forwardRef<
  React.LegacyRef<ViewRN> | undefined,
  TStyledProps<ViewProps>
>((props, ref) => {
  return <StyledView {...props} ref={ref} />;
});
