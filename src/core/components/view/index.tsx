import React, { forwardRef } from 'react';
import { View as ViewRN, ViewProps } from 'react-native';
import { _viewProps } from '../../themes/components';
import { TStyledProps } from '../../themes/styled-system';
import { makeStyledComponent } from '../../utils/makeStyledComponent';

const StyledView = makeStyledComponent(ViewRN);

export const View = forwardRef<
  React.LegacyRef<ViewRN> | undefined,
  TStyledProps<ViewProps>
>((props, ref) => {
  return <StyledView {..._viewProps} {...props} ref={ref} />;
});
