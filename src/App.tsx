/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationScreens} from './config/navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {appService} from './services/app-service';
import {NavigationContainer} from '@react-navigation/native';
import BMIScreen from './screens/BMIScreen/BMIScreen';

declare const global: {HermesInternal: null | {}};

const {Navigator, Screen} = createStackNavigator();

function App() {
  appService.useStatusBarLightContent();

  return (
    <NavigationContainer>
      <Navigator initialRouteName={navigationScreens.app} headerMode="none">
        <Screen
          name={navigationScreens.app}
          component={HomeScreen}
          initialParams={{}}
        />
        <Screen
          name={navigationScreens.bmi}
          component={BMIScreen}
          initialParams={{}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
export default App;
