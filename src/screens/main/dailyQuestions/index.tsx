import React, { Component } from 'react';
import { View, Text } from 'react-native';

console.disableYellowBox = true;

type Props = {};
class DailyQuestions extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Questions!</Text>
      </View>
    );
  }
}

export default DailyQuestions;
