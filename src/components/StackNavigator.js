import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import NewLocationScreen from './NewLocationScreen';
import ListFeedbackScreen from './ListFeedbackScreen';
import NewFeedbackScreen from './NewFeedbackScreen';
import MessagingScreen from './MessagingScreen'

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  NewLocation: NewLocationScreen,
  Conversations: ListFeedbackScreen,
  NewFeedback: NewFeedbackScreen,
  Messages: MessagingScreen,
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
