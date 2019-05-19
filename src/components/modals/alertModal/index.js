import React, { useContext } from "react";
import { Modal, Platform } from "react-native";
import { Button } from "../../commons/buttons";

import { ModalContext } from "../../../context/modalContext";
import { SessionContext } from "../../../context/sessionContext";
import { Container, ContentContainer, Text, TitleText } from "./styles";

const AlertModal = props => {
  const { hideButton, closeModal } = props;
  const modalContext = useContext(ModalContext);
  const sessionContext = useContext(SessionContext);
  const {
    appText: { modalButtonConfirmText },
  } = sessionContext;
  const {
    showAlertModal,
    alertText: { title, description },
  } = modalContext;
  return (
    <Modal animationType={"fade"} transparent={true} visible={showAlertModal}>
      <Container>
        <ContentContainer>
          <TitleText>{title}</TitleText>
          {description ? (
            <Text
              color="#666666"
              fontSize={13}
              marginTop={9}
              style={{ marginBottom: Platform.OS === "ios" ? 12 : 0 }}
            >
              {description}
            </Text>
          ) : null}
          {!hideButton && (
            <Button
              marginTop={24}
              title={modalButtonConfirmText}
              submit={closeModal}
            />
          )}
        </ContentContainer>
      </Container>
    </Modal>
  );
};

export default AlertModal;
