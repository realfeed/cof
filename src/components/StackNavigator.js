import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import NewLocationScreen from './NewLocationScreen';

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  NewLocation: NewLocationScreen,
//  Feedback: ListFeedbackScreen,
//  NewFeedback: NewFeedbackScreen,
//  Messages: MessagingScreen,
  },
  {
  initialRouteName: "Home",
  }
);

//const TabNavigator = createBottomTabNavigator({
//  Home: HomeScreen,
//  Feedback: ListFeedbackScreen,
//});

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;
