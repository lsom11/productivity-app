import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';
import ForgotPass from '../screens/login/ForgotPassword';

const loginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPass: { screen: ForgotPass },
  },
  {
    initialRouteName: 'ForgotPass',
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
