import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Button } from 'react-native-material-ui';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import TableView from 'react-native-tableview';
import Me from '../../me';

const { Section, Item } = TableView

export default class NewLocationScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      myBuildings: Me["data"]["me"]["properties"]["userProperties"]
    }
  }

  static navigationOptions = { header:null}

  render() {
    const {navigate} = this.props.navigation;
    return (
      <React.Fragment>
      <Button
      iconLeft
      style={{ text: { color:"white", font: "Helvetica Neue", fontSize:15, fontWeight: "bold" },  container: { backgroundColor: "rgba(249,144,0,0.9)", height: 50, width: 165, margin: 18, borderRadius: 5 } }}
      text="View Locations"
      upperCase={false}
      icon="home"
      onPress={()=> this.props.navigation.navigate("Home")}>
      </Button>
        <View style={styles.container}>
          <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.770]}
          style={{ flex: 1 }}>
          </Mapbox.MapView>
        </View>
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
          <Section label="Participating Locations">
            <Item value="1" onPress={() => true}>
              {this.state.myBuildings[0].propertyId}
            </Item>
            <Item value="2" onPress={() => true}>
              {this.state.myBuildings[1].propertyId}
            </Item>
          </Section>
        </TableView>
      </React.Fragment>
    );
  }
}

const styles = ({
  container: {
      flex: 1
  }
});
