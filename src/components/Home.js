import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';

import AddLocation from './Buttons';

import Chart from './Chart';

import TableView from 'react-native-tableview';
import Me from '../../me';

const { Section, Item } = TableView

export class HomeScreen extends Component<Props> {
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
          <AddLocation onPress={()=> navigate('NewLocation')} />
        </View>
        <View style={styles.container}>
          <Chart />
        </View>
        <View style={styles.container}>
          <TableView
            style={{ flex: 1 }}
            allowsToggle
            selectedValue={this.state.myBuildings[0].propertyId}
            tableViewStyle={TableView.Consts.Style.Grouped}
            tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
            onPress={event => console.log(event)}>
            <Section label="Performance Summary">
              <Item value="1" selected onPress={() => true}>
                {this.state.myBuildings[0].propertyId}
              </Item>
              <Item value="2" onPress={() => true}>
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
