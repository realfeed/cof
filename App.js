/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import {createStackNavigator, createAppNavigator} from 'react-navigation';

import HomeScreen from './src/components/Home';
import NewLocationScreen from './src/components/NewLocation';

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(aws_exports);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  NewLocation: NewLocationScreen,
//  Feedback: ListFeedbackScreen,
//  NewFeedback: NewFeedbackScreen,
//  Messages: MessagingScreen,
});

const App = createAppNavigator(MainNavigator);

export default withAuthenticator(App, true);
