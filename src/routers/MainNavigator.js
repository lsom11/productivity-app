import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DailyQuestionsNavigator from "./DailyQuestionsNavigator";

const mainNavigator = createMaterialBottomTabNavigator(
  {
    DailyQuestions: {
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="language" size={24} color="#fff" />,
        tabBarLabel: "Destaques",
      }),
      screen: DailyQuestionsNavigator,
    },
  },
  {
    barStyle: { backgroundColor: "#000" },
    header: null,
    headerMode: "none",
    initialRouteName: "DailyQuestions",
    labeled: true,
    shifting: false,
  },
);

export default mainNavigator;
