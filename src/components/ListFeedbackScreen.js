import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native-material-ui';

import TableView from 'react-native-tableview';
import ListConversations from '../../listConversations';

const { Section, Item } = TableView

export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myConversations: ListConversations["data"]["listConversations"]["items"]
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
        <TableView
          style={styles.container}
          textColor="black"
          headerTextColor="black"
          headerFontFamily="Helvetica Neue"
          headerFontSize={15}
          detailTextColor="rgba(249,144,0,0.9)"
          detailFontFamily="Helvetica Neue"
          detailFontSize={12}
          headerFontWeight="bold"
          fontFamily="Helvetica Neue"
          fontSize={15}
          allowsToggle
          tableViewStyle={TableView.Consts.Style.Grouped}
          tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
          onPress={event => console.log(event)}>
          <Section arrow label="Conversations">
            <Item value="1" detail={this.state.myConversations[0].PropertyId} onPress={() => true}>
              {this.state.myConversations[0].name}
            </Item>
            <Item value="2" detail={this.state.myConversations[1].PropertyId} onPress={() => true}>
              {this.state.myConversations[1].name}
            </Item>
            <Item value="2" detail={this.state.myConversations[2].PropertyId} onPress={() => true}>
              {this.state.myConversations[2].name}
            </Item>
            <Item value="2" detail={this.state.myConversations[3].PropertyId} onPress={() => true}>
              {this.state.myConversations[3].name}
            </Item>
          </Section>
        </TableView>
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
  }
});
