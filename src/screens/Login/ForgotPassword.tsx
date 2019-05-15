import React, { useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { Image } from '../../../components/commons/images';
import { LoginHeader } from '../../../components/commons/headers';
import { Button as SubmitButton } from '../../../components/commons/buttons';

import {
  Container,
  ContentContainer,
  LogoContainer,
  TextContainer,
  Text,
  InputContainer,
  TextView,
  ImageContainer,
} from './styles';
import { Input } from '../../../components/commons/inputs';

import checkInternetConnection from '../../../utils/checkInternet';

const Props = {};
const ForgotPass = (props: Props) => {
  const { navigation } = props;
  const { goBack, navigate, state } = navigation;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  async function submitForm() {
    console.log('submit');
  }

  const handleNav = async () => {
    console.log('nav');
  };

  // const handleResetAlert = () => {
  //   setResetAlert(false);
  //   if (error) setEmail('');
  //   if (!error) navigation.navigate('SignIn');
  // };

  return (
    <Container
      style={{
        paddingTop: Platform.OS === 'android' ? 15 : 0,
      }}
    >
      <LoginHeader
        backText="Voltar"
        showArrow={true}
        title="Login"
        navigation={() => handleNav()}
      />
      <ContentContainer>
        <LogoContainer>
          <ImageContainer />
          <TextContainer>
            <Text color="#000" fontSize={20} style={{ marginBottom: 15 }}>
              Esqueceu a senha?
            </Text>
            <TextView>
              <Text color="#666666" fontSize={13} lineHeight="18px">
                Insira seu e-mail cadastrado e nós enviaremos as instruções para
                você redefinir sua senha. =)
              </Text>
            </TextView>
          </TextContainer>
        </LogoContainer>

        <InputContainer>
          <Input
            onChangeText={text => setEmail(text)}
            placeholder="E-mail"
            style={{ paddingLeft: 20 }}
            keyboardType="email-address"
            value={email}
            spellCheck={false}
            autoCorrect={false}
          />
          <SubmitButton submit={submitForm} title="Enviar" />

          <Text color="#666666" fontSize={13}>
            Não tem uma conta?{' '}
            <Text
              color="#EB0F68"
              fontSize={13}
              underline
              underlineColor="#EB0F68"
            >
              Crie aqui
            </Text>
          </Text>
        </InputContainer>
      </ContentContainer>
    </Container>
  );
};

export default ForgotPass;
