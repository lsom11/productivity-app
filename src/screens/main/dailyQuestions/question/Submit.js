import React, { useEffect } from "react";
import { FooterContainer, Footer, FooterText } from "../styles";

const Submit = ({
  theme: {
    buttonBackgroundColor,
    disabledBackgroundColor,
    disabledTextColor,
    buttonTextColor,
  },
  title = "Test",
  enabled,
  submit,
}) => {
  useEffect(() => {
    return () => {};
  }, [enabled]);
  return (
    <FooterContainer onPress={() => submit()}>
      <Footer color={enabled ? buttonBackgroundColor : disabledBackgroundColor}>
        <FooterText color={enabled ? buttonTextColor : disabledTextColor}>
          {title.toUpperCase()}
        </FooterText>
      </Footer>
    </FooterContainer>
  );
};

export default Submit;
