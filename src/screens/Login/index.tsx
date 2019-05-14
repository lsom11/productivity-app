/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';

console.disableYellowBox = true;

type Props = {};
class Login extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>login!</Text>
      </View>
    );
  }
}

export default Login;
