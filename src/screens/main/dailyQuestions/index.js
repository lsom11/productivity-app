import React, { Component } from "react";
import { Text, View } from "react-native";
import { MainHeader } from "../../../components/commons/headers";
import withContext from "../../../components/hocs/withContext";

class DailyQuestions extends Component {
  render() {
    const {
      navigation: { navigate },
      sessionContext: {
        theme: { iconColor },
        appText: { questionsTitle },
      },
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MainHeader
          iconColor={iconColor}
          title={questionsTitle}
          showIcon
          iconAction={() => navigate("AddQuestion")}
        />
      </View>
    );
  }
}

export default withContext(DailyQuestions);
