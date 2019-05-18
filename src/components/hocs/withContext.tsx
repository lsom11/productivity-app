import React from "react";
import {
  Consumer as ModalConsumer,
  IState as ModalState,
} from "../../context/modalContext";
import {
  Consumer as SessionConsumer,
  IState as SessionState,
} from "../../context/sessionContext";

const withContext = Comp => {
  return props => (
    <ModalConsumer {...props}>
      {(modalContext: ModalState) => (
        <SessionConsumer {...props}>
          {(session: SessionState) => (
            <Comp {...props} sessionContext={session} />
          )}
        </SessionConsumer>
      )}
    </ModalConsumer>
  );
};

export default withContext;
