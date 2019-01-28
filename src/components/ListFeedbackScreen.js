import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native-material-ui';

import TableView from 'react-native-tableview';
import Me from '../../me';

const { Section, Item } = TableView

export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myConversations: Me["data"]["me"]["conversations"]["userConversations"]
    }
  }

  static navigationOptions = { header:null};

  render() {
    return (
      <React.Fragment>
        <Button
          iconLeft
          style={{ text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(249,144,0,0.9)", height: 50, width: 165, margin: 18, borderRadius: 5 } }}
          text="New Feedback"
          upperCase={false}
          icon="add">
        </Button>
        <TableView
          style={styles.container}
          textColor="black"
          headerTextColor="black"
          selectedTextColor="rgba(249,144,0,0.9)"
          headerFontFamily="Helvetica Neue"
          headerFontSize={15}
          headerFontWeight="bold"
          fontFamily="Helvetica Neue"
          fontSize={15}
          allowsToggle
          tableViewStyle={TableView.Consts.Style.Grouped}
          tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
          onPress={event => console.log(event)}>
          <Section arrow label="Conversations">
            <Item value="1" onPress={() => true}>
              {this.state.myConversations[0].conversationId}
            </Item>
            <Item value="2" onPress={() => true}>
              {this.state.myConversations[1].conversationId}
            </Item>
            <Item value="2" onPress={() => true}>
              {this.state.myConversations[2].conversationId}
            </Item>
            <Item value="2" onPress={() => true}>
              {this.state.myConversations[3].conversationId}
            </Item>
          </Section>
        </TableView>
        <View style={styles.wrapper}>
          <Button
            style={{text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(249,144,0,0.9)", height: 50, width: 130, margin: 18, borderRadius: 5 } }}
            upperCase={false}
            icon="home"
            onPress={()=> this.props.navigation.navigate("Home")}>
          </Button>
          <Button
            style={{text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(249,144,0,0.9)", height: 50, width: 130, margin: 18, borderRadius: 5 } }}
            upperCase={false}
            icon="announcement"
            onPress={()=> this.props.navigation.navigate("Conversations")}>>
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
    margin: 18
  }
});
