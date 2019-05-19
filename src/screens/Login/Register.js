import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

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

const Register = props => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RegisterAlert, setRegisterAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const { navigation } = props;
  const { goBack, navigate } = navigation;
  const { sessionContext } = props;
  const {
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
  } = sessionContext;

  async function userCall() {
    return;
  }

  async function submitForm() {
    return;
  }

  return (
    <ContainerScroll>
      <LoginHeader
        backText={cancelText}
        title="Register"
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

        <SubmitButton submit={submitForm} title={submitText} />

        <TextContainer>
          <Text fontSize={13}>
            {alreadyRegisteredText}{" "}
            <Text
              color={secondaryColor}
              fontSize={13}
              onPress={() => navigate("Login")}
            >
              {enterHereText}
            </Text>
          </Text>
          <TouchableOpacity onPress={() => navigate("ForgotPass")}>
            <Text color={secondaryColor} fontSize={13}>
              {forgotPassText}
            </Text>
          </TouchableOpacity>
        </TextContainer>
        <TextContainer />
      </ContentContainer>
    </ContainerScroll>
  );
};

export default withContext(Register);
