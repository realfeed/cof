import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native-material-ui';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import Geolocation from 'react-native-geolocation-service';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

import TableView from 'react-native-tableview';
import Me from '../../me';

const { Section, Item } = TableView

export default class NewLocationScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myBuildings: Me["data"]["me"]["properties"]["userProperties"],
      mapboxRequest: " ",
      features: [],
    }
  }

  geoCoding = () => {
    console.log("Awaiting geoCoding");
    fetch(this.state.mapboxRequest)
    .then(response => response.json())
    .then(data => this.setState({ features: data.features }))
    .catch(e => console.log(e));
  }

  setMapboxRequest = () => {
    var url_1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    var url_2 = ".json?access_token=";
    var url_3 = url_1.concat(this.state.location, url_2, MAPBOX_ACCESS_TOKEN);
    this.setState((mapboxRequest) => {
      return { mapboxRequest: url_3};
    });
    console.log("Mapbox Request");
    console.log(this.state.mapboxRequest);
    alert(this.state.mapboxRequest);
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
        alert(this.state.location);
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
    this.setState({ isLoading: true });
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
        <Button
        iconLeft
        style={{ text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(0,0,0,0.8)", height: 50, margin: 18, borderRadius: 5 } }}
        text="Add Location"
        upperCase={false}
        icon="add"
        onPress={()=> this.props.navigation.navigate("Home")}>
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
          selectedValue={this.state.myBuildings[0].propertyId}
          tableViewStyle={TableView.Consts.Style.Grouped}
          tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
          onPress={event => console.log(event)}>
          <Section label="Nearby Locations">
            <Item value="1" onPress={() => true}>
              {this.state.myBuildings[0].propertyId}
            </Item>
            <Item value="2" onPress={() => true}>
              {this.state.myBuildings[1].propertyId}
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
