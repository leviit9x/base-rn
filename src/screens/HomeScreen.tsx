import React from 'react';
import {View, Button} from 'react-native';
import {useServices} from '../services';
import {AppModal} from './types';

export function HomeScreen() {
  const {navigation} = useServices();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="change"
        onPress={() => {
          navigation.push(AppModal.COMMON_ERROR_MODAL);
        }}></Button>
    </View>
  );
}
