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
import getText from "../../utils/getText";
import { userInfo } from "../../fetch/user";

const Login = props => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { sessionContext, modalContext, navigation } = props;
  const { navigate } = navigation;
  const { setShowLoading, toggleAlertModal, setAlertText } = modalContext;
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
      locale,
    },
    setLogin,
  } = sessionContext;

  async function userCall(auth) {
    const fetchedUser = await userInfo(auth.token);
    await setLogin(fetchedUser, auth.token);
    await navigate("MainNavigator");
  }

  async function submitForm() {
    await setShowLoading(true);
    try {
      const token = await login(user, password);
      await userCall(token);
    } catch (e) {
      await setAlertText({
        description: getText(locale, "invalidCredentialsLoginDescription"),
        title: getText(locale, "invalidCredentialsLoginTitle"),
      });
      await toggleAlertModal();
    }
    await setShowLoading(false);
  }

  async function validateBeforeSubmit() {
    if (!user || !password) {
      await setAlertText({
        description: getText(locale, "blankCredentialsLoginDescription"),
        title: getText(locale, "blankCredentialsLoginTitle"),
      });
      await toggleAlertModal();
    } else {
      submitForm();
    }
  }

  return (
    <ContainerScroll>
      <LoginHeader
        backText={cancelText}
        title="Login"
        color={primaryColor}
        navColor={secondaryColor}
        navigation={() => navigate("Register")}
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
        <SubmitButton
          backgroundColor={secondaryColor}
          submit={validateBeforeSubmit}
          title={submitText}
        />

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

          {/* <Text color={secondaryColor} fontSize={"13px"}>
            {forgotPassText}
          </Text> */}
        </TextContainer>
      </ContentContainer>
    </ContainerScroll>
  );
};

export default withContext(Login);
