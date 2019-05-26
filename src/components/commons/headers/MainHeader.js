import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import styled from "styled-components";
import truncateString from "../../../utils/truncateString";

import { HeaderText, Container } from "./styles";
import { ModalContext } from "../../../context/modalContext";

const DrawerContainer = styled.TouchableOpacity``;
const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: -1;
`;

const HeaderContainer = styled.View`
  height: 50px;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 0.4px;
  border-bottom-color: grey;
`;

const MainHeader = ({
  title = "Main",
  showIcon = false,
  iconName = "add",
  iconAction,
  iconColor = "#666",
}) => {
  const modalContext = useContext(ModalContext);
  const { openDrawer } = modalContext;

  return (
    <Container>
      <HeaderContainer>
        <DrawerContainer>
          <Icon
            name={"account-circle"}
            size={30}
            color={iconColor}
            onPress={() => openDrawer()}
          />
        </DrawerContainer>
        <TitleContainer>
          <HeaderText title>{truncateString(title)}</HeaderText>
        </TitleContainer>
        {showIcon && (
          <DrawerContainer>
            <Icon
              name={iconName}
              size={30}
              color={iconColor}
              onPress={() => iconAction()}
            />
          </DrawerContainer>
        )}
      </HeaderContainer>
    </Container>
  );
};

export default MainHeader;
