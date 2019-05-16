import { createSwitchNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';

const createRootNavigator = (initialRouteName: string = 'LoginNavigator') => {
  return createSwitchNavigator(
    {
      LoginNavigator: { screen: LoginNavigator },
      MainNavigator: { screen: MainNavigator },
    },
    {
      initialRouteName,
    }
  );
};

export default createRootNavigator;
