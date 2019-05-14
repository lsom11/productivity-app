import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import DailyQuestionsNavigator from './DailyQuestionsNavigator';

const mainNavigator = createMaterialBottomTabNavigator(
  {
    DailyQuestions: {
      screen: DailyQuestionsNavigator,
      navigationOptions: () => ({
        tabBarLabel: 'Destaques',
        tabBarIcon: () => <Icon name="language" size={24} color="#fff" />,
      }),
    },
  },
  {
    initialRouteName: 'DailyQuestions',
    header: null,
    headerMode: 'none',
    labeled: true,
    shifting: false,
    barStyle: { backgroundColor: '#000' },
  }
);

export default mainNavigator;
