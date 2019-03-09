import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking, TextInput} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { Button } from 'react-native-material-ui';

import Form from 'react-native-form';

import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import { client } from '../../App';
import { createConversation } from '../graphql/mutations';
import EventEmitter from "react-native-md5";
import md5 from "react-native-md5";

export class NewFeedbackScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      impression: " ",
      hex_md5v: md5.hex_md5( Date.now() +"" ),
      epoch: parseInt(Date.now() /1000, 0),
      currentUser: " ",
    }
  }

  submitConversation = () => {
    (async () => {
      console.log("Awaiting mutation")
      const result = await client.mutate({
        mutation: gql(createConversation),
        variables: {
          input: {
            createdAt: this.state.epoch,
            ConversationId: this.state.hex_md5v,
            name: this.state.impression,
            sentiment: 0.3,
            classification: "productivity",
            PropertyId: "13 Fitzroy Street, Bloomsbury, London W1T 4BQ",
          }
        }
      });
      console.log(result.data.createConversation);
    })();
  }

  static navigationOptions = { header:null};

  render() {
    return (
      <React.Fragment>
        <Button
          iconLeft
          style={{ text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(0,0,0,0.8)", height: 50, margin: 18, borderRadius: 5 } }}
          text="Add Feedback"
          upperCase={false}
          icon="add"
          onPress={()=> this.submitConversation() }>
        </Button>
        <View style={{ margin: 20 }}>
          <Text style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", margin: 5, flexWrap: "wrap"}}>
            AN IMPRESSION
          </Text>
          <Form
            ref="form">
            <View
              style={styles.container}>
              <TextInput
                type="TextInput"
                name="feedbackTextInput"
                id="feedbackTextInput"
                multiline={true}
                style={{ color:"black", font: "Helvetica Neue", fontSize:15, margin: 20 }}
                onChangeText={(impression) => {this.setState({impression})} }>
                *
              </TextInput>
            </View>
          </Form>
        </View>
        <View style={styles.wrapper}>
          <Button
            style={{text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { height: 50, width: 160} }}
            upperCase={false}
            icon="home"
            onPress={()=> this.props.navigation.navigate("Home")}>
          </Button>
          <Button
            style={{text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { height: 50, width: 160} }}
            upperCase={false}
            icon="announcement"
            onPress={()=> this.props.navigation.navigate("Conversations")}>
          </Button>
        </View>
      </React.Fragment>
    );
  }
}

const styles = ({
  container: {
      borderRadius: 5,
      borderWidth: 0.4,
      borderColor: "rgba(0,0,0,0.3)",
      height: 455,
  },
  wrapper: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 20,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 5,
  }
});

const mapStateToProps = (state) => {
  return { current_location: state.current_location }
};

export default connect(mapStateToProps)(NewFeedbackScreen);
