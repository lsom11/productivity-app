/* eslint-disable no-underscore-dangle */

import React, { useState } from "react";
// import { TouchableOpacity } from "react-native";

import { Button as SubmitButton } from "../../components/commons/buttons/index";
import { Input, PasswordInput } from "../../components/commons/inputs";

import { LoginHeader } from "../../components/commons/headers";
import withContext from "../../components/hocs/withContext";
import {
  ContainerScroll,
  ContentContainer,
  InputContainer,
  LogoContainer,
  Text,
  TextContainer,
} from "./styles";
import getText from "../../utils/getText";
import { register } from "../../fetch/auth";
import { userInfo } from "../../fetch/user";

const Register = props => {
  const [user, setUser] = useState("lsom11");
  const [email, setEmail] = useState("lucwsomers@gmail.com");
  const [password, setPassword] = useState("123456");
  const { sessionContext, modalContext, navigation } = props;
  const { goBack, navigate } = navigation;
  const { setShowLoading, toggleAlertModal, setAlertText } = modalContext;
  const {
    locale,
    theme: { primaryColor, secondaryColor },
    appText: {
      cancelText,
      forgotPassText,
      passwordInput,
      submitText,
      usernameInput,
      alreadyRegisteredText,
      emailRegisterInput,
      usernameRegisterInput,
      enterHereText,
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
      const token = await register(email, user, password);
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
        title="Register"
        color={primaryColor}
        navColor={primaryColor}
        navigation={() => goBack()}
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
            placeholder={usernameRegisterInput}
            keyboardType="email-address"
            value={user}
            spellCheck={false}
            autoCorrect={false}
          />
          <Input
            onChangeText={text => setEmail(text)}
            placeholder={emailRegisterInput}
            keyboardType="email-address"
            value={email}
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
          backgroundColor={primaryColor}
          submit={validateBeforeSubmit}
          title={submitText}
        />

        <TextContainer>
          <Text fontSize={13}>
            {alreadyRegisteredText}{" "}
            <Text
              color={primaryColor}
              fontSize={13}
              onPress={() => navigate("Login")}
            >
              {enterHereText}
            </Text>
          </Text>
          {/* <TouchableOpacity onPress={() => navigate("ForgotPass")}>
            <Text color={secondaryColor} fontSize={13}>
              {forgotPassText}
            </Text>
          </TouchableOpacity> */}
        </TextContainer>
        <TextContainer />
      </ContentContainer>
    </ContainerScroll>
  );
};

export default withContext(Register);
