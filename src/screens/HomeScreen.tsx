import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useServices } from '@services';
import { View, Text } from '@core/components';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

export function HomeScreen() {
  const { system } = useServices();

  return (
    <View
      margin-0
      radii-10
      bg-amber-100
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'amber.300'}
      flexDirection={'row'}>
      <View w={'50%'}>
        <Text>{Config.ENV}</Text>
        <Text>AppName: {DeviceInfo.getApplicationName()}</Text>
        <Text>App Bundle Id: {DeviceInfo.getBundleId()}</Text>
      </View>
      <View w={'50%'}>
        <Text fontSize={'md'}>Choose theme</Text>
        {system.getModeVariants().map(elm => (
          <TouchableOpacity
            key={elm}
            style={{
              width: '100%',
              height: 52,
              backgroundColor: '#f9f7f0',
              marginBottom: 10,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => system.setThemeMode(elm)}>
            <Text>{elm}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
