/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppNavigator} from './src/app';

import {initServices, ServicesProvider} from './src/services';

LogBox.ignoreLogs([
  'EventEmitter.removeListener',
  '`new NativeEventEmitter()`',
  '[react-native-gesture-handler] Seems like', // https://github.com/software-mansion/react-native-gesture-handler/issues/1831
]);

export default (): JSX.Element => {
  const [ready, setReady] = useState(false);

  const startApp = useCallback(async () => {
    await initServices();

    setReady(true);
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <StoresProvider> */}
      <ServicesProvider>{ready ? <AppNavigator /> : null}</ServicesProvider>
      {/* </StoresProvider> */}
    </GestureHandlerRootView>
  );
};
