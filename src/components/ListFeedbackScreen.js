import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { updateConversation } from './ConversationActions';

import { Button } from 'react-native-material-ui';
import { ListItem } from 'react-native-elements';

import ListConversations from '../../listConversations';

export class ListFeedbackScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myConversations: ListConversations["data"]["listConversations"]["items"],
      currentUser: " "
    }
  }

  static navigationOptions = { header:null};

  render() {
    return (
      <React.Fragment>
        <Button
          iconLeft
          style={{ text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(0,0,0,0.8)", height: 50, margin: 18, borderRadius: 5 } }}
          text="New Feedback"
          upperCase={false}
          icon="add"
          onPress={()=> this.props.navigation.navigate("NewFeedback")}>>
        </Button>
        <View>
          <Text style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", marginLeft: 20, marginTop: 18 }}>
            CONVERSATIONS
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start"}}>
          {
            this.state.myConversations.map((conversations, index) => (
              <ListItem
              divider
              key={index}
              title={conversations.name}
              subtitle={conversations.PropertyId}
              titleStyle={styles.listItemRoot}
              subtitleStyle={styles.listItemSelected}
              onPress={() => {
                this.props.add(this.state.current_conversation)
                this.props.navigation.navigate("Messages")
              }}
              />
            ))
          }
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
      flex: 1,
  },
  wrapper: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 20,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 5,
  },
  listItemRoot: {
    color:"black",
    font: "Helvetica Neue",
    fontSize: 15,
  },
  listItemSelected: {
    color: "rgba(249,144,0,0.9)",
    font: "Helvetica Neue",
    fontSize: 12,
  }
});

const mapStateToProps = (state) => {
  return { current_conversation: state.current_conversation }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateConversation,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ListFeedbackScreen);
