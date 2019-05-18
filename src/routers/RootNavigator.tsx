import { Animated, Easing } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import MainNavigator from "./MainNavigator";

const createRootNavigator = (initialRouteName: string = "LoginNavigator") => {
  return createSwitchNavigator(
    {
      LoginNavigator: { screen: LoginNavigator },
      MainNavigator: { screen: MainNavigator },
    },
    {
      initialRouteName,
    },
  );
};

export default createRootNavigator;
