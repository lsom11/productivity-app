import styled from "styled-components";

const TitleText = styled.Text`
  color: ${props => (props.color ? props.color : "#000")};
  font-size: 20px;
  margin-right: 5px;
`;
const UsernameText = styled.Text`
  color: ${props => (props.color ? props.color : "#000")};
  font-size: 15px;
`;

const View = styled.View`
  display: flex;
  flex-direction: row;
`;

const Text = styled.Text`
  color: ${props => (props.color ? props.color : "#000")};
  font-size: 15px;
  margin: 5% 5% -5% 7.5%;
`;

const ParagraphText = styled.Text`
  color: ${props => (props.color ? props.color : "#999999")};
  font-size: 13px;
`;

const TextContainer = styled.View`
  display: flex;
  width: 85%;
  justify-content: center;
  flex-direction: column;
`;

const LogoContainer = styled.View`
  height: 10%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 18px;
  padding-bottom: 18px;
`;

const Image = styled.Image`
  height: 20px;
  width: 105px;
  align-self: flex-start;
`;

const RouteContainer = styled.View`
  flex: 1;
`;
const Route = styled.View`
  height: 70px;
  width: 100%;
  /* border-bottom-width: 1px; */
  /* border-bottom-color: ${props => props.color}; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Route,
  View,
  TitleText,
  ParagraphText,
  TextContainer,
  LogoContainer,
  Image,
  RouteContainer,
  UsernameText,
  Text,
};
