import React, {Component} from 'react';
import { TouchableHighlight, Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { Button } from 'react-native-material-ui';
import { ListItem} from 'react-native-elements';

import Chart from './Chart';
import { client } from '../../App'

import Me from '../../me';

import Amplify, { Auth } from 'aws-amplify';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { me } from '../graphql/queries';

export class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myProperties: [],
      myBuildings: Me.data.me.properties.userProperties,
      currentUser: " ",
    }
  }

  myselfResponse = () => {
    (async () => {
      console.log("Calling API");
      console.log(this.state.currentUser);
      const myself = await client.query({
        query: gql(me),
        variables: { username: this.state.currentUser }
      });
      console.log("myself Response");
            if (myself.data.me === null) {} else {
              this.setState((myProperties) => {
                return {myProperties: myself.data.me.properties.userProperties}
              });
            }
    })();
  }

  componentDidMount() {
    console.log("Requesting current user");
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    .then(
      user => {
        console.log(JSON.stringify(user.username, null, 2));
        this.setState((currentUser) => {
          return { currentUser: user.username}
        });
      this.myselfResponse();
      console.log("State set");
    })
    .catch(err => console.log(err));
  }

  static navigationOptions = { header:null};

  render() {
    return (
      <React.Fragment>
        <Chart />
        <Button
          iconLeft
          style={{ text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(0,0,0,0.8)", height: 50, margin: 18, borderRadius: 5 } }}
          text="Update Current Location"
          upperCase={false}
          icon="add"
          onPress={()=> this.props.navigation.navigate("NewLocation")}>
        </Button>
        <View>
          <Text style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", marginLeft: 20 }}>
            CURRENT LOCATION
          </Text>
        </View>
        <View>
          <TouchableHighlight>
            <ListItem
            divider
            titleStyle={styles.listItemRoot}
            hideChevron
            underlayColor={"rgba(0,0,0,0.3)"}
            >
              {this.props.current_location}
            </ListItem>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", marginLeft: 20, marginTop: 18 }}>
            PARTICIPATING LOCATIONS
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start"}}>
          {
            this.state.myBuildings.map((otherPlace, index) => (
              <TouchableHighlight>
                <ListItem
                divider
                hideChevron
                underlayColor={"rgba(0,0,0,0.3)"}
                key={index}
                title={otherPlace.propertyId}
                titleStyle={styles.listItemRoot}
                onPress={() => {}}
                />
              </TouchableHighlight>
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
    fontSize: 15,
  },
});

export default connect(state => {
  return {
    current_location: state.current_location
  }
})(HomeScreen);
