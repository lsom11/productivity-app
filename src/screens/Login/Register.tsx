import React, { useState, useEffect, useContext } from 'react';
import { Platform, TouchableOpacity, Linking, AppState } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Input, PasswordInput } from '../../../components/commons/inputs';
import { Button as SubmitButton } from '../../../components/commons/buttons';

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

const Props = {};
const Register = (props: Props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginAlert, setLoginAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const { navigation } = props;
  const { goBack, navigate } = navigation;

  async function userCall() {
    console.log(user);
  }

  async function submitForm() {
    console.log('submit');
  }

  return (
    <ContainerScroll>
      <LoginHeader
        backText="Cancelar"
        title="Login"
        navigation={() => navigate('Onboarding')}
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
            placeholder="E-mail"
            keyboardType="email-address"
            value={user}
            spellCheck={false}
            autoCorrect={false}
          />

          <PasswordInput
            onChangeText={text => setPassword(text)}
            placeholder="Senha"
            secureTextEntry
            value={password}
          />
        </InputContainer>
        <SubmitButton submit={submitForm} title="Enviar" />

        <TextContainer>
          <TouchableOpacity onPress={() => navigate('ForgotPass')}>
            <Text color="#EB0F68" fontSize={13}>
              Esqueci a senha
            </Text>
          </TouchableOpacity>
        </TextContainer>
      </ContentContainer>
    </ContainerScroll>
  );
};

export default Register;
