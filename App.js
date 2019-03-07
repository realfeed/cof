/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, Linking} from 'react-native';

import AppContainer from './src/components/StackNavigator'

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import statusReducer from './src/components/StatusReducer';

import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { getUser } from './src/graphql/queries';
import { createUser} from './src/graphql/mutations';
import EventEmitter from "react-native-md5";
import md5 from "react-native-md5";

Amplify.configure(awsmobile);

const store = createStore(statusReducer);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
});

type Props = {};

class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
     currentUser: "",
     hex_md5v: md5.hex_md5( Date.now() +"" ),
   }
  }

  submitUser = () => {
    (async () => {
      console.log("Awaiting mutation");
      console.log(this.state.currentUser);
      try {
        const result = await client.mutate({
          mutation: gql(createUser),
          variables: {
            input: {
              cognitoId: this.state.currentUser,
              userId: this.state.hex_md5v,
              username: this.state.currentUser,
              userType: "occupant",
            }
          }
        });
      } catch(error) {console.log(error)}
      console.log(result.data.createUser);
    })();
  }

  currentUsersResponse = () => {
    (async () => {
      console.log("Calling API");
      console.log(this.state.currentUser);
      const currentUsers =  await client.query({
          query: gql(getUser),
          variables: { cognitoId: this.state.currentUser }
      });
      console.log("currentUsers Response");
      console.log(currentUsers.data.getUser);
      if (currentUsers.data.getUser.length == 0) {
        this.submitUser();
      }
    })();
  }

  componentDidMount() {
    console.log("Requesting current user")
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    .then(
      user => {
        console.log(JSON.stringify(user.username, null, 2));
        this.setState((currentUser) => {
          return { currentUser: user.username};
        })
        this.currentUsersResponse();
        console.log("State set");
      })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Provider store={ store }>
        <AppContainer
          screenProps={ {
            current_location: this.state.current_location,
            current_conversation: this.state.current_conversation,
          } } 
        />
      </Provider>
    );
  }
}

export default withAuthenticator(App, true);
