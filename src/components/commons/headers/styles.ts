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
  color: ${props => (props.title ? "#000" : "#EA0F67")};
  font-size: ${props => (props.title ? "18" : "14")};
  align-self: center;
`;

export { HeaderContainer, HeaderText };
