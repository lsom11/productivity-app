/* eslint-disable no-nested-ternary */

import styled from "styled-components";
import {
  BUTTON_TEXT_FONT,
  PRIMARY_TITLE_FONT,
  SECONDARY_TITLE_FONT,
} from "../../../assets/styles/fonts";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Text = styled.Text``;

const IconContainer = styled.TouchableOpacity`
  height: 100%;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
`;
const QuestionsContainer = styled.View`
  background-color: ${props => props.backgroundColor || "#000"};
  flex: 1;
  padding: 16px;
`;
const QuestionsContentContainer = styled.View`
  background-color: ${props => props.backgroundColor || "#000"};
  flex: 1;
  padding: 16px 0;
`;
const FooterContainer = styled.TouchableOpacity`
  height: 12.5%;
  display: flex;
  align-items: center;
  padding: 2.5% 5%;
`;
const Footer = styled.View`
  background-color: ${props => props.color || "#000"};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const StatusBar = styled.View`
  height: 5px;
  margin-bottom: 5%;
  background-color: ${props => props.color || "#000"};
  width: ${props => props.progress || "0%"};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 0 5%;
`;
const QuestionsHeader = styled.View`
  height: 10%;
  width: 100%;
  padding: 0 2.5%;
  flex-direction: row;
  background-color: ${props => props.backgroundColor || "#000"};
  align-items: center;
  justify-content: space-between;
`;

const FooterText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props => BUTTON_TEXT_FONT};
  font-weight: 700;
`;
const DateText = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;
const ContentText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props =>
    props.fontSize
      ? props.fontSize
      : props.title
      ? PRIMARY_TITLE_FONT
      : SECONDARY_TITLE_FONT};
  line-height: 25px;
  margin-top: 2.5%;
  margin-bottom: ${props => (props.marginBottom ? "5%" : "2.5%")};
`;

const GradeTitle = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props =>
    props.fontSize
      ? props.fontSize
      : props.title
      ? PRIMARY_TITLE_FONT
      : SECONDARY_TITLE_FONT};
`;

const PromptText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: 20px;
  margin-left: 2.5%;
  margin-bottom: 2.5%;
`;

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: -1;
`;

const HeaderText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props =>
    props.title ? PRIMARY_TITLE_FONT : SECONDARY_TITLE_FONT};
  align-self: center;
  margin-left: -50px;
`;

export {
  QuestionsHeader,
  QuestionsContentContainer,
  QuestionsContainer,
  Container,
  Text,
  DateText,
  HeaderContainer,
  TitleContainer,
  HeaderText,
  ContentContainer,
  ContentText,
  FooterContainer,
  Footer,
  FooterText,
  StatusBar,
  IconContainer,
  PromptText,
  GradeTitle,
};
