import React, { useState } from "react";

import { Button as SubmitButton } from "../../components/commons/buttons/index";
import { Input, PasswordInput } from "../../components/commons/inputs";

import { LoginHeader } from "../../components/commons/headers";
import withContext from "../../components/hocs/withContext";
import { login } from "../../fetch/auth";
import {
  ContainerScroll,
  ContentContainer,
  InputContainer,
  LogoContainer,
  Text,
  TextContainer,
} from "./styles";

const Login = props => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginAlert, setLoginAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const { navigation } = props;
  const { goBack, navigate } = navigation;
  const { sessionContext, modalContext } = props;
  const {
    theme: { primaryColor, secondaryColor },
    appText: {
      cancelText,
      forgotPassText,
      passwordInput,
      submitText,
      usernameInput,
      notRegisteredText,
      enterHereText,
    },
  } = sessionContext;

  async function userCall() {
    return;
  }

  async function submitForm() {
    console.log(user, password);
    try {
      const token = await login(user, password);
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ContainerScroll>
      <LoginHeader
        backText={cancelText}
        title="Login"
        color={primaryColor}
        navColor={secondaryColor}
        // navigation={() => navigate('Onboarding')}
        style={{ marginBottom: 20 }}
      />

      <ContentContainer>
        <LogoContainer>
          {/* <Image
            source={require('../../../assets/images/logos/goreadColor.png')}
            resizeMode="contain"
          /> */}
        </LogoContainer>

        <InputContainer style={{ marginTop: 10 }}>
          <Input
            onChangeText={text => setUser(text)}
            placeholder={usernameInput}
            keyboardType="email-address"
            value={user}
            spellCheck={false}
            autoCorrect={false}
          />

          <PasswordInput
            onChangeText={text => setPassword(text)}
            placeholder={passwordInput}
            secureTextEntry
            value={password}
          />
        </InputContainer>
        <SubmitButton submit={submitForm} title={submitText} />

        <TextContainer>
          <Text>
            {notRegisteredText}{" "}
            <Text
              color={secondaryColor}
              fontSize={"13px"}
              onPress={() => navigate("Register")}
            >
              {enterHereText}
            </Text>
          </Text>

          <Text color={secondaryColor} fontSize={"13px"}>
            {forgotPassText}
          </Text>
        </TextContainer>
      </ContentContainer>
    </ContainerScroll>
  );
};

export default withContext(Login);
