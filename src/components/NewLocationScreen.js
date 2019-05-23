import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native-material-ui';
import { ListItem} from 'react-native-elements';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import gql from 'graphql-tag';
import Amplify, { Auth } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { updateUser } from '../graphql/queries';

import Geolocation from 'react-native-geolocation-service';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

import Me from '../../me';

export default class NewLocationScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myBuildings: Me["data"]["me"]["properties"]["userProperties"],
      mapboxRequest: "",
      placeNames: [],
      location: [0,0],
      currentUser: " ",
      cognitoId: " ",
      userId: " ",
      username: " ",
      userType: " ",
      currentLocationID: " ",
      currentConversationID: " ",
    }
  }

  setCurrentLocation = () => {
    console.log("setting current location");
    (async () => {
      console.log("Awaiting mutation");
      const result = await client.mutate({
        mutation: gql(updateUser),
        variables: {
          input: {
            currentUser: this.state.currentUser,
            cognitoId: this.state.cognitoId,
            userId: this.state.userId,
            username: this.state.username,
            userType: this.state.userType,
            currentLocationID: this.state.currentLocationID,
            currentConversationID: this.state.currentConversationID,
          }
        }
      });
      console.log(result.data.updateUser);
      console.log("Navigating Home");
      this.props.navigation.navigate("Home");
    })();
  }

  myselfResponse = () => {
    (async () => {
      console.log("Calling API");
      console.log(this.state.currentUser);
      const myself = await client.query({
        query: gql(me),
        variables: {currentUser: this.state.currentUser,
                    cognitoId: this.state.cognitoId,
                    userId: this.state.userId,
                    username: this.state.username,
                    userType: this.state.userType,
                    currentLocationID: this.state.currentLocationID,
                    currentConversationID: this.state.currentConversationID}
      });
      console.log("myself Response");
    })();
  }

  geoCoding = () => {
    console.log("Awaiting geoCoding");
    fetch(this.state.mapboxRequest)
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          this.setState({ placeNames: data.features });
          console.log("placeNames");
          console.info(this.state.placeNames);
          });
        })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }


  setMapboxRequest = () => {
    var url_1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    var url_2 = ".json?types=poi&limit=5&access_token=";
    var url_3 = url_1.concat(this.state.location, url_2, MAPBOX_ACCESS_TOKEN);
    this.setState((mapboxRequest) => {
      return { mapboxRequest: url_3};
    });
    console.log("Mapbox Request");
    console.log(this.state.mapboxRequest);
    this.geoCoding();
  }

  geoLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log("Getting Current Position**")
        console.log(position);
        this.setState((location) => {
          return {location: [position.coords.longitude, position.coords.latitude]}
        });
        console.log("locationCoordinates");
        this.setMapboxRequest();
      },
      (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentDidMount() {
    this.geoLocation();
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
        <View style={styles.container}>
          <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={this.state.location}
          style={styles.container}>
          </Mapbox.MapView>
        </View>
        <View>
          <Text style={{ color:"black", font: "Helvetica Neue", fontSize:15, fontWeight: "bold", marginLeft: 20, marginTop: 18 }}>
            NEARBY LOCATIONS
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start"}}>
          {
            this.state.placeNames.map((placeName, index) => (
              <ListItem
              divider
              key={index}
              title={placeName.place_name}
              titleStyle={styles.listItemRoot}
              checkBox
              onPress={(e) => {
                this.setState({ currentLocationID: e.nativeEvent.target.getAttribute("title") })
                .then(
                  this.setCurrentLocation())
                .catch(err => console.log(err));
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
    fontSize: 15,
  },
});
