import { createSwitchNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import MainNavigator from "./MainNavigator";

const createRootNavigator = token =>
  createSwitchNavigator(
    {
      LoginNavigator: { screen: LoginNavigator },
      MainNavigator: { screen: MainNavigator },
    },
    {
      initialRouteName: !token ? "LoginNavigator" : "MainNavigator",
    },
  );

export default createRootNavigator;
