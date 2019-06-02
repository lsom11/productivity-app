import { Platform } from "react-native";
import styled, { css } from "styled-components";

const HeaderContainer = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${Platform.select({
    android: css``,
    ios: css`
      margin-top: 5%;
    `,
  })};
`;
const HeaderText = styled.Text`
  color: ${props => props.color || "#000"};
  font-size: ${props => (props.title ? "18" : "14")};
  align-self: center;
`;
const Container = styled.SafeAreaView`
  background-color: ${props => props.backgroundColor || "#000"};
`;

export { HeaderContainer, HeaderText, Container };
