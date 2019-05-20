import { createSwitchNavigator } from "react-navigation";
import LoginNavigator from "./LoginNavigator";
import DrawerNavigator from "./DrawerNavigator";

const createRootNavigator = token =>
  createSwitchNavigator(
    {
      DrawerNavigator: { screen: DrawerNavigator },
      LoginNavigator: { screen: LoginNavigator },
    },
    {
      initialRouteName: !token ? "LoginNavigator" : "DrawerNavigator",
    },
  );

export default createRootNavigator;
