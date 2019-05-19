import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import QuestionsList from "../screens/main/dailyQuestions";

const dailyQuestionsNavigator = createStackNavigator(
  {
    QuestionsList: { screen: QuestionsList },
  },
  {
    headerMode: "none",
    initialRouteName: "QuestionsList",

    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        easing: Easing.step0,
        timing: Animated.timing,
      },
    }),
  },
);

export default dailyQuestionsNavigator;
