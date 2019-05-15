import styled, { css } from 'styled-components';
import { Platform, Dimensions } from 'react-native';
import returnDimensionSpecificStyle from '../../../helpers/platform';

const Container = styled.SafeAreaView`
  padding: 0 2.5%;
  height: 100%;
  width: 100%;
`;
const ContainerScroll = styled.ScrollView`
  margin-top: 5%;
  height: 100%;
  width: 100%;
  padding: 0 2.5%;
`;
const ContentContainer = styled.View`
  margin-top: 10%;
  height: ${props =>
    returnDimensionSpecificStyle(
      '100%',
      '100%',
      Dimensions.get('window').height - 170
    )};
  width: 100%;
  padding: ${props => (props.noPadding ? '0 0' : '0 10%')};
  background-color: ${props =>
    props.background ? props.background : 'transparent'};
  ${props =>
    returnDimensionSpecificStyle(false, false, true) &&
    `
    padding-left: 25%;
    padding-right: 25%;
  `};
`;

const LogoContainer = styled.View`
  height: 7.5%;
  margin: ${props => (props.margin ? props.margin : '2% 0')};
`;
const InputContainer = styled.View`
  margin-bottom: 4%;
`;
const TextContainer = styled.View`
  ${Platform.select({
    ios: css`
      height: 60%;
    `,
    android: css`
      height: 25%;
    `,
  })};
  justify-content: space-around;
  align-items: center;
`;
const TextView = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily || 'Gotham-Bold'};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-decoration-color: ${props =>
    props.underlineColor ? props.underlineColor : 'transparent'};
  text-align: center;
`;

export {
  Container,
  ContentContainer,
  LogoContainer,
  InputContainer,
  TextContainer,
  Text,
  TextView,
  ContainerScroll,
};
