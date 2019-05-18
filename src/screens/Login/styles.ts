import { Dimensions, Platform } from "react-native";
import styled, { css } from "styled-components";

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
  height: 100%;
  width: 100%;
  padding: ${props => (props.noPadding ? "0 0" : "0 10%")};
  background-color: ${props =>
    props.background ? props.background : "transparent"};
`;

const LogoContainer = styled.View`
  height: 7.5%;
  margin: ${props => (props.margin ? props.margin : "2% 0")};
`;
const InputContainer = styled.View`
  margin-bottom: 4%;
`;
const TextContainer = styled.View`
  ${Platform.select({
    android: css`
      height: 25%;
    `,
    ios: css`
      height: 60%;
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
  color: ${props => props.color || "#000"};
  font-size: ${props => props.fontSize || "13px"};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  text-decoration-color: ${props =>
    props.underlineColor ? props.underlineColor : "transparent"};
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
