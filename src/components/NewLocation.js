import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import Home from './Buttons';

import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';

import TableView from 'react-native-tableview';
import Me from '../../me';

const { Section, Item } = TableView

export class NewLocationScreen extends Component<Props> {
  constructor(props) {
    const {navigate} = this.props.navigation;
    super(props);
    this.state = {
      myBuildings: Me["data"]["me"]["properties"]["userProperties"]
    }
  }
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Home onPress={()=> Home} />
        </View>
        <View style={styles.container}>
          <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.770]}
          style={styles.container}>
          </Mapbox.MapView>
        </View>
        <View style={styles.container}>
          <TableView
            style={{ flex: 1 }}
            allowsToggle
            selectedValue={this.state.myBuildings[0].propertyId}
            tableViewStyle={TableView.Consts.Style.Grouped}
            tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
            onPress={event => console.log(event)}>
            <Section label="Select Location" arrow>
              <Item value="1" onPress={()=> Home}>
                {this.state.myBuildings[0].propertyId}
              </Item>
              <Item value="2" onPress={()=> Home}>
                {this.state.myBuildings[1].propertyId}
              </Item>
            </Section>
          </TableView>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
