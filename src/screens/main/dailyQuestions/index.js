import React, { Component } from "react";
import { Text, View } from "react-native";
import { MainHeader } from "../../../components/commons/headers";
import withContext from "../../../components/hocs/withContext";

class DailyQuestions extends Component {
  render() {
    const {
      sessionContext: {
        appText: { questionsTitle },
      },
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MainHeader title={questionsTitle} />
      </View>
    );
  }
}

export default withContext(DailyQuestions);
