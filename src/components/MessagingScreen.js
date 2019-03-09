import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking, TextInput} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { Button, Card } from 'react-native-material-ui';

import Form from 'react-native-form';

import GetConversation from '../../getConversation'

export class MessagingScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myMessages: GetConversation["data"]["GetConversation"][0]["messages"]
    }
  }

  static navigationOptions = { header:null};

  render() {
    return (
      <React.Fragment>
        <View style={{ flex:1, margin:20}}>
          {
            this.state.myMessages.map((messages) => (
              <Card style={{ container: { borderRadius: 5, backgroundColor:"rgba(30,136,229,0.8)" } }}>
                <Text  style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                  {messages.sender}
                </Text>
                <Text  style={{ color:"black", font: "Helvetica Neue", fontSize:15, marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
                  {messages.content}
                </Text>
              </Card>
            ))
          }
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", margin: 5, flexWrap: "wrap"}}>
            A MESSAGE
          </Text>
          <Form
            ref="form">
            <View
            style={styles.container}>
              <TextInput
                type="TextInput"
                name="feedbackTextInput"
                placeholder="Type your reply here"
                placeholderTextColor={"rgba(0,0,0,0.3)"}
                multiline={true}
                style={{ color:"black", font: "Helvetica Neue", fontSize:15, margin: 20 }}>
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
      height: 100,
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

export default connect(state => {
  return {
    current_conversation: state.current_conversation
  }
})(MessagingScreen);
