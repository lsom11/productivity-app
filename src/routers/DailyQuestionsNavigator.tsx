import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import QuestionsList from '../screens/main/dailyQuestions';

const dailyQuestionsNavigator = (
  initialRouteName: string = 'QuestionsList'
) => {
  return createStackNavigator(
    {
      QuestionsList: { screen: QuestionsList },
    },
    {
      initialRouteName,
      headerMode: 'none',

      transitionConfig: () => ({
        transitionSpec: {
          duration: 0,
          timing: Animated.timing,
          easing: Easing.step0,
        },
      }),
    }
  );
};

export default dailyQuestionsNavigator;
