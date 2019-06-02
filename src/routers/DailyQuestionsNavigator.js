import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import QuestionsList from "../screens/main/dailyQuestions";
import GradeQuestion from "../screens/main/dailyQuestions/GradeQuestion";
import Title from "../screens/main/dailyQuestions/question/Title";
import Frequency from "../screens/main/dailyQuestions/question/Frequency";
import Category from "../screens/main/dailyQuestions/question/Category";

const dailyQuestionsNavigator = createStackNavigator(
  {
    Category: { screen: Category },
    Frequency: { screen: Frequency },
    GradeQuestion: { screen: GradeQuestion },
    QuestionsList: { screen: QuestionsList },
    Title: { screen: Title },
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
