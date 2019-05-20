import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import MainNavigator from "./MainNavigator";
import Menu from "../components/menu";

const { width } = Dimensions.get("window");

const DrawerConfig = {
  contentComponent: Menu,
  drawerWidth: width * 0.8,
  header: null,
  headerMode: "none",
};

const DrawerNavigator = createDrawerNavigator(
  {
    tabs: MainNavigator,
  },
  DrawerConfig,
);

export default DrawerNavigator;
