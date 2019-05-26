import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Header from "./Header";
import { Container, ContentContainer, ContentText, StatusBar } from "../styles";
import withContext from "../../../../components/hocs/withContext";
import Submit from "./Submit";
import { NoBorderInput } from "../../../../components/commons/inputs";

const Title = props => {
  const [question, setQuestion] = useState("");
  const [enabled, setEnabled] = useState(false);
  const { navigation, sessionContext } = props;
  const {
    theme: { primaryColor, secondaryColor },
    appText: {
      addQuestionTitle,
      addQuestionParagraph,
      addQuestionPlaceholder,
      confirmText,
    },
  } = sessionContext;

  useEffect(() => {
    if (question.length >= 5) setEnabled(true);
    else setEnabled(false);
    return () => {
      console.log("cleanup");
    };
  }, [question]);

  const handleSubmit = () => {
    console.log(question);
    navigation.navigate("Frequency");
    console.log("submit!");
  };

  return (
    <Container>
      <Header
        navigation={navigation}
        theme={sessionContext.theme}
        status="1/3"
      />
      <StatusBar progress={"33%"} color={primaryColor} />
      <ContentContainer>
        <ContentText title color={primaryColor}>
          {addQuestionTitle}
        </ContentText>
        <ContentText color={secondaryColor}>{addQuestionParagraph}</ContentText>
        <View style={{ height: 50 }} />
        <NoBorderInput
          onChangeText={text => setQuestion(text)}
          value={question}
          spellCheck={false}
          autoCorrect={false}
          color={primaryColor}
          placeholder={addQuestionPlaceholder}
        />
      </ContentContainer>
      <Submit
        submit={handleSubmit}
        enabled={setEnabled}
        title={confirmText}
        theme={sessionContext.theme}
      />
    </Container>
  );
};

export default withContext(Title);
