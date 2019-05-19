import React from "react";
import { Consumer as ModalConsumer } from "../../context/modalContext";
import { Consumer as SessionConsumer } from "../../context/sessionContext";

const withContext = Comp => {
  return props => (
    <ModalConsumer {...props}>
      {modalContext => (
        <SessionConsumer {...props}>
          {session => (
            <Comp
              {...props}
              modalContext={modalContext}
              sessionContext={session}
            />
          )}
        </SessionConsumer>
      )}
    </ModalConsumer>
  );
};

export default withContext;
