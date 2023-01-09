import React from 'react';
import { View, Text } from '@core/components';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { MemeIcon } from '@assets/icons';

function Ball() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? 'green' : 'orange',
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      'worklet';
      isPressed.value = true;
    })
    .onChange(e => {
      'worklet';
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      'worklet';
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.ball, animatedStyles]}>
        <MemeIcon width={100} height={100} />
      </Animated.View>
    </GestureDetector>
  );
}

export function HomeScreen() {
  return (
    <View
      margin-0
      radii-10
      bg-amber-100
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}>
      <View w={'100%'}>
        <Text>{Config.ENV}</Text>
        <Text>AppName: {DeviceInfo.getApplicationName()}</Text>
        <Text>App Bundle Id: {DeviceInfo.getBundleId()}</Text>
      </View>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
