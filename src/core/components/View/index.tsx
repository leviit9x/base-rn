import React, {forwardRef} from 'react';
import {View as ViewRN, ViewProps} from 'react-native';
import {TComponentTheme} from '../../themes/styled-system';
import {makeStyledComponent} from '../../utils/makeStyledComponent';

const StyledView = makeStyledComponent(ViewRN);

type TViewProps = ViewProps & Partial<TComponentTheme>;

export const View = forwardRef((props: TViewProps, ref: any) => {
  return <StyledView {...props} ref={ref} />;
});
