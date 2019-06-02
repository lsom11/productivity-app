import React, { Component } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Rating } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  CardContainer,
  TitleContainer,
  GradeContainer,
  QuestionText,
} from "./styles";
import { IconContainer } from "../styles";

class Card extends Component {
  ratingCompleted = rate => {
    console.log(`Rating is: ${rate}`);
  };
  render() {
    const {
      item: { question, rating },
      backgroundColor,
      iconColor,
      navigate,
      primaryColor,
      today,
    } = this.props;
    return (
      <CardContainer backgroundColor={backgroundColor}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigate("GradeQuestion", { item: { question, rating }, today })
          }
        >
          <TitleContainer>
            <QuestionText color={primaryColor}>{question}?</QuestionText>
            <IconContainer style={{ position: "absolute", right: 0 }}>
              <Icon
                name={"chevron-right"}
                size={30}
                color={iconColor}
                onPress={() =>
                  navigate("GradeQuestion", { item: { question, rating } })
                }
              />
            </IconContainer>
          </TitleContainer>
        </TouchableWithoutFeedback>

        <GradeContainer>
          <Rating
            type="star"
            startingValue={rating || 0}
            ratingCount={5}
            imageSize={40}
            readonly={!today}
            onFinishRating={() => this.ratingCompleted()}
            ratingBackgroundColor={primaryColor}
          />
        </GradeContainer>
      </CardContainer>
    );
  }
}

export default Card;
