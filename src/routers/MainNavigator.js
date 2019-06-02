import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DailyQuestionsNavigator from "./DailyQuestionsNavigator";

const mainNavigator = createMaterialBottomTabNavigator(
  {
    DailyQuestions: {
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="calendar-today" size={24} color="#fff" />,
        tabBarLabel: "Daily Questions",
      }),
      screen: DailyQuestionsNavigator,
    },
  },
  {
    barStyle: { backgroundColor: "#204476" },
    header: null,
    headerMode: "none",
    initialRouteName: "DailyQuestions",
    labeled: true,
    shifting: false,
  },
);

export default mainNavigator;
