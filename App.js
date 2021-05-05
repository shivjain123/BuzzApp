import React from "react";
import { StyleSheet, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FacebookScreen from "./screens/fb";
import InstagramScreen from "./screens/in";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Instagram: { screen: InstagramScreen }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === 'Facebook') {
          return (
            <Image
              style={{ width: 20, height: 20 }}
              source={require('./assets/facebook.jpg')}
            />
          )
        } else if (routeName === 'Instagram') {
          return (
            <Image
              style={{ width: 20, height: 20 }}
              source={require('./assets/insta.jpg')}
            />
          )
        }
      }
    }),
  }
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});