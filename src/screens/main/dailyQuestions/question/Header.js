import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";
import { HeaderContainer, ContentText } from "../styles";

const Header = ({
  theme: { iconColor, primaryColor },
  navigation: { goBack },
  status = "0/3",
  noStatus = false,
}) => {
  return (
    <HeaderContainer>
      <TouchableOpacity>
        <Icon
          name={"arrow-back"}
          size={30}
          color={iconColor}
          onPress={() => goBack()}
        />
      </TouchableOpacity>
      {!noStatus && <ContentText color={primaryColor}>{status}</ContentText>}
    </HeaderContainer>
  );
};

export default Header;
