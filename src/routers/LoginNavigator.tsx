import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import Login from '../screens/login/Login';

const loginNavigator = (initialRouteName: string = 'Login') => {
  return createStackNavigator(
    {
      Login: { screen: Login },
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

export default loginNavigator;
