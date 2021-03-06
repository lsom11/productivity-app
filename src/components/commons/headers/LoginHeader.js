import React, { useContext, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components";

import { HeaderContainer, HeaderText } from "./styles";

const NavContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  margin: 0 2.5%;
  height: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  z-index: 9999;
`;
const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoginHeader = ({
  title,
  backText,
  navigation,
  showArrow = false,
  color,
  navColor,
}) => {
  return (
    <HeaderContainer>
      <NavContainer onPress={() => navigation()}>
        {showArrow && (
          <Icon
            name="ios-arrow-back"
            size={18}
            color={navColor}
            style={{ marginRight: 10 }}
          />
        )}
        <HeaderText color={navColor}>{backText}</HeaderText>
      </NavContainer>
      <TitleContainer>
        <HeaderText title>{title}</HeaderText>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default LoginHeader;
