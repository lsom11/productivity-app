import React, { Component } from "react";
import { Text, View } from "react-native";

interface IProps {
  navigation: object;
}
class DailyQuestions extends Component<IProps> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Questions!</Text>
      </View>
    );
  }
}

export default DailyQuestions;
