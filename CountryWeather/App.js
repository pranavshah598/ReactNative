/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { CountryInformation } from './src/Country/CountryInformation';
import { CountryInput } from './src/Country/CountryInput';
import { CountryWeather } from './src/Country/CountryWeather';
import { createStackNavigator } from 'react-navigation-stack';
const App  = () => {
  return (<AppContainer/>);
};

const AppNavigator = createStackNavigator({
  CountryInput: {
    screen: CountryInput,
    navigationOptions:{
      title:'Country Input'
    }
  },
  CountryInformation: {
    screen: CountryInformation,
    navigationOptions:{
      title:'Country Information'
    }
  },
  CountryWeather: {
    screen: CountryWeather,
    navigationOptions:{
      title:'Country Weather'
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);


export default App;
