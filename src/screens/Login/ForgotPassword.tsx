import React, { useContext, useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { Image } from '../../components/commons/images';
import { LoginHeader } from '../../components/commons/headers';
import { Button as SubmitButton } from '../../components/commons/buttons';

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
import { Input } from '../../components/commons/inputs';

import checkInternetConnection from '../../utils/checkInternet';
import { SessionContext } from '../../context/sessionContext';

const Props = {};
const ForgotPass = (props: Props) => {
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
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  async function submitForm() {
    console.log('submit');
  }

  const handleNav = async () => {
    console.log('nav');
  };

  return (
    <Container
      style={{
        paddingTop: Platform.OS === 'android' ? 15 : 0,
      }}
    >
      <LoginHeader
        backText={backText}
        showArrow={true}
        color={primaryColor}
        navColor={secondaryColor}
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
            {notRegisteredText}{' '}
            <Text
              color={secondaryColor}
              fontSize={13}
              underline
              underlineColor={secondaryColor}
              onPress={() => navigate('Register')}
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
