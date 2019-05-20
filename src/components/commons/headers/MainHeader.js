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
  margin-left: -50px;
  z-index: -1;
`;

const View = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  height: 50px;
  padding: 0 2.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.4px;
  border-bottom-color: grey;
`;

const MainHeader = ({ title = "Main" }) => {
  const modalContext = useContext(ModalContext);
  const { openDrawer } = modalContext;

  return (
    <Container>
      <HeaderContainer>
        <DrawerContainer>
          <Icon
            name={"account-circle"}
            size={30}
            color="#666666"
            onPress={() => openDrawer()}
          />
        </DrawerContainer>
        <TitleContainer>
          <HeaderText title>{truncateString(title)}</HeaderText>
        </TitleContainer>
      </HeaderContainer>
    </Container>
  );
};

export default MainHeader;
