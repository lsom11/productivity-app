import React from 'react';
import {
  SessionConsumer,
  State as SessionState,
} from '../../../context/sessionContext';

const withContext = Comp => {
  return props => (
    <SessionConsumer {...props}>
      {(session: SessionState) => <Comp {...props} sessionContext={session} />}
    </SessionConsumer>
  );
};

export default withContext;
