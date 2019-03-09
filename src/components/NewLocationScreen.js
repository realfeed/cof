import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLocation } from './LocationActions';

import { Button } from 'react-native-material-ui';
import { ListItem} from 'react-native-elements';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import Geolocation from 'react-native-geolocation-service';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

import Me from '../../me';

export class NewLocationScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myBuildings: Me["data"]["me"]["properties"]["userProperties"],
      mapboxRequest: "",
      placeNames: [],
      location: [0,0],
    }
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
              onPress={() => {
                this.props.updateLocation(placeName.place_name)
                alert(this.props.current_location)
                this.props.navigation.navigate("Home")
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

export default connect(state => {
  return {
    current_location: state.current_location
  }
}, { updateLocation })(NewLocationScreen);
