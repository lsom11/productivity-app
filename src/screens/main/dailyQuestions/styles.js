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

const HeaderContainer = styled.View`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
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

const FooterText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props => BUTTON_TEXT_FONT};
  font-weight: 700;
`;
const ContentText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props =>
    props.title ? PRIMARY_TITLE_FONT : SECONDARY_TITLE_FONT};
  line-height: 25px;
  margin-top: 2.5%;
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
  Container,
  Text,
  HeaderContainer,
  TitleContainer,
  HeaderText,
  ContentContainer,
  ContentText,
  FooterContainer,
  Footer,
  FooterText,
  StatusBar,
};
