import {Text as RNText} from 'react-native';
import React from 'react';
import {resolverPropsKeyStyle} from '../../utils';

export default function Text(props: any) {
  const styles = resolverPropsKeyStyle(props);
  console.log('==========================================================');
  console.log('===track styles Text', styles);
  console.log('==========================================================');

  return <RNText style={[styles]}>{props.children}</RNText>;
}
