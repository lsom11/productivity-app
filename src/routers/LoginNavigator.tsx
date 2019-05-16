import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import Login from '../screens/login/Login';

const loginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login',
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

export default loginNavigator;
