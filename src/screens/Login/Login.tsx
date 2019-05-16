import React, { useState, useEffect, useContext } from 'react';
import { Platform, TouchableOpacity, Linking, AppState } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, PasswordInput } from '../../components/commons/inputs';
import { Button as SubmitButton } from '../../components/commons/buttons/index';

import {
  ContainerScroll,
  ContentContainer,
  LogoContainer,
  InputContainer,
  TextContainer,
  Text,
  TextView,
} from './styles';
import { Image } from '../../components/commons/images';
import { TitleWithLine } from '../../components/commons/text';
import { LoginHeader } from '../../components/commons/headers';
import withContext from '../../components/hocs/withContext';

const Props = {};
const Login = (props: Props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginAlert, setLoginAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const { navigation } = props;
  const { goBack, navigate } = navigation;
  const { sessionContext } = props;
  const {
    appText: {
      cancelText,
      forgotPassText,
      passwordInput,
      submitText,
      usernameInput,
    },
  } = sessionContext;

  async function userCall() {
    console.log(user);
  }

  async function submitForm() {
    console.log('submit');
  }

  useEffect(() => console.log(props));

  return (
    <ContainerScroll>
      <LoginHeader
        backText={cancelText}
        title="Login"
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
          <TouchableOpacity onPress={() => navigate('ForgotPass')}>
            <Text color="#EB0F68" fontSize={13}>
              {forgotPassText}
            </Text>
          </TouchableOpacity>
        </TextContainer>
      </ContentContainer>
    </ContainerScroll>
  );
};

export default withContext(Login);
