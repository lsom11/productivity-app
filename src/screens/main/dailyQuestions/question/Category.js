import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "./Header";
import { Container, ContentContainer, ContentText, StatusBar } from "../styles";
import withContext from "../../../../components/hocs/withContext";
import Submit from "./Submit";

const Category = props => {
  const [enabled, setEnabled] = useState(false);
  const { navigation, sessionContext } = props;
  const {
    theme: { primaryColor, secondaryColor },
    appText: { addCategoryTitle, addCategoryParagraph, confirmText },
  } = sessionContext;

  const handleSubmit = () => {
    navigation.navigate("Category");
  };

  return (
    <Container>
      <Header
        navigation={navigation}
        theme={sessionContext.theme}
        status="3/3"
      />
      <StatusBar progress={"100%"} color={primaryColor} />
      <ContentContainer>
        <ContentText title color={primaryColor}>
          {addCategoryTitle}
        </ContentText>
        <ContentText color={secondaryColor}>{addCategoryParagraph}</ContentText>
        <View style={{ height: 50 }} />
        <Text>category!</Text>
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

export default withContext(Category);
