import React, { useState } from "react";
import { View } from "react-native";
import { Rating } from "react-native-elements";
import { Container, ContentContainer, ContentText, GradeTitle } from "./styles";
import Header from "./question/Header";
import Submit from "./question/Submit";
import withContext from "../../../components/hocs/withContext";
import { Input } from "../../../components/commons/inputs";
import { GradeContainer } from "./list/styles";

const GradeQuestion = ({ navigation, sessionContext }) => {
  const [obs, setObservation] = useState("");

  const {
    state: {
      params: {
        item: { question, rating },
        today,
      },
    },
    navigate,
  } = navigation;
  const {
    theme: { primaryColor, secondaryColor },
    appText: { prompt, confirmText, observation },
  } = sessionContext;

  const ratingCompleted = rate => {
    console.log(`Rating is: ${rate}`);
  };

  const handleSubmit = () => {
    navigate("QuestionsList");
    console.log("push");
  };

  return (
    <Container>
      <Header navigation={navigation} theme={sessionContext.theme} noStatus />
      <ContentContainer>
        <ContentText title marginBottom color={primaryColor}>
          {prompt}
        </ContentText>

        <View style={{ flex: 0.5, marginBottom: 20, marginTop: 10 }}>
          <GradeTitle fontSize="36px" color={secondaryColor}>
            {question}?
          </GradeTitle>

          <GradeContainer marginTop>
            <Rating
              type="star"
              startingValue={rating || 0}
              ratingCount={5}
              imageSize={40}
              onFinishRating={e => ratingCompleted(e)}
              ratingBackgroundColor={primaryColor}
              readonly={!today}
            />
          </GradeContainer>
        </View>

        <Input
          textarea
          multiline={true}
          onChangeText={text => setObservation(text)}
          value={obs}
          spellCheck={false}
          autoCorrect={false}
          color={primaryColor}
          placeholder={observation}
        />
      </ContentContainer>
      <Submit
        enabled={true}
        submit={handleSubmit}
        title={confirmText}
        theme={sessionContext.theme}
      />
    </Container>
  );
};

export default withContext(GradeQuestion);
