import React, { useContext } from "react";
import { Modal, Platform } from "react-native";
import { Button } from "../../commons/buttons";

import { ModalContext } from "../../../context/modalContext";
import { SessionContext } from "../../../context/sessionContext";
import { Container, ContentContainer, Text, TitleText } from "./styles";

interface IModalProps {
  title: string;
  description: string;
  showModal: boolean;
  closeModal: void;
  hideButton: boolean;
}
const AlertModal = (props: IModalProps) => {
  const { title, description, hideButton, closeModal, showModal } = props;
  const modalContext = useContext(ModalContext);
  const sessionContext = useContext(SessionContext);
  const {
    appText: { modalButtonConfirmText },
  } = sessionContext;
  return (
    <Modal animationType={"fade"} transparent={true} visible={showModal}>
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
