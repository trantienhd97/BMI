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
import RockPaperScissors from './screens/RockPaperScissors/RockPaperScissors';
import ReadPaper from './screens/News/News';
import HomeNewspaper from './screens/News/HomeNewspaper/HomeNewspaper';
import DetailScreen from './screens/News/DetailScreen/DetailScreen';

declare const global: {HermesInternal: null | {}};

const {Navigator, Screen} = createStackNavigator();

function App() {
  appService.useStatusBarLightContent();

  return (
    <NavigationContainer>
      <Navigator initialRouteName={navigationScreens.app} headerMode="none">
        <Screen name={'home'} component={HomeScreen} initialParams={{}} />
        <Screen name={'bmi'} component={BMIScreen} initialParams={{}} />
        <Screen
          name={'rockPaperScissor'}
          component={RockPaperScissors}
          initialParams={{}}
        />
        <Screen name={'readPaper'} component={ReadPaper} initialParams={{}} />
        <Screen
          name={'homeNewspaper'}
          component={HomeNewspaper}
          initialParams={{}}
        />
        <Screen
          name={'detailNews'}
          component={DetailScreen}
          initialParams={{}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
export default App;
