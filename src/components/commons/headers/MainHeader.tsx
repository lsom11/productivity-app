/* eslint-disable no-nested-ternary */

import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Platform, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import truncateString from '../../../utils/truncateString';

import { HeaderText } from './styles';

const DrawerContainer = styled.TouchableOpacity``;
const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
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

const MainHeader = ({ title = 'Main', navigation }) => {
  return (
    <HeaderContainer>
      {/* <DrawerContainer>
        {session.isLoggedIn ? (
          <Icon
            name={'account-circle'}
            size={30}
            color="#666666"
            onPress={() => openDrawer()}
          />
        ) : (
          <Button transparent>
          
            <Icon
              name={'account-circle'}
              size={30}
              color="#666666"
              onPress={() => openDrawer()}
            />
          </Button>
        )}
      </DrawerContainer> */}
      <TitleContainer>
        <HeaderText title>{truncateString(title)}</HeaderText>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default MainHeader;
