import React, { useContext, useState } from "react";
import { Platform, View } from "react-native";
import { Button as SubmitButton } from "../../components/commons/buttons";
import { LoginHeader } from "../../components/commons/headers";

import { Input } from "../../components/commons/inputs";
import {
  Container,
  ContentContainer,
  InputContainer,
  LogoContainer,
  Text,
  TextContainer,
  TextView,
} from "./styles";

import { SessionContext } from "../../context/sessionContext";

const ForgotPass = props => {
  const session = useContext(SessionContext);
  const {
    theme: { primaryColor, secondaryColor },
    appText: {
      backText,
      forgotPassText,
      forgotPassParagraph,
      emailRegisterInput,
      notRegisteredText,
      enterHereText,
      submitText,
    },
  } = session;
  const { navigation } = props;
  const { goBack, navigate, state } = navigation;
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  async function submitForm() {
    return;
  }

  const handleNav = async () => {
    return;
  };

  return (
    <Container
      style={{
        paddingTop: Platform.OS === "android" ? 15 : 0,
      }}
    >
      <LoginHeader
        backText={backText}
        showArrow={true}
        color={primaryColor}
        navColor={primaryColor}
        title="Login"
        navigation={() => goBack()}
      />
      <ContentContainer>
        <LogoContainer>
          {/* <ImageContainer /> */}
          <TextContainer>
            <Text color={primaryColor} fontSize={20}>
              {forgotPassText}
            </Text>
            <TextView>
              <Text color="#666666" fontSize={13} lineHeight="18px">
                {forgotPassParagraph}
              </Text>
            </TextView>
          </TextContainer>
        </LogoContainer>

        <InputContainer>
          <Input
            onChangeText={text => setEmail(text)}
            placeholder={emailRegisterInput}
            style={{ paddingLeft: 20 }}
            keyboardType="email-address"
            value={email}
            spellCheck={false}
            autoCorrect={false}
          />
          <SubmitButton submit={submitForm} title={submitText} />
          <View style={{ marginTop: 15 }} />
          <Text color="#666666" fontSize={13}>
            {notRegisteredText}{" "}
            <Text
              color={primaryColor}
              fontSize={13}
              underline
              underlineColor={primaryColor}
              onPress={() => navigate("Register")}
            >
              {enterHereText}
            </Text>
          </Text>
        </InputContainer>
      </ContentContainer>
    </Container>
  );
};

export default ForgotPass;
