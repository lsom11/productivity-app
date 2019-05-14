/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import createRootNavigator from './routers/RootNavigator';
import SessionProvider, {
  State as SessionState,
} from './context/sessionContext';

const Navigator = createAppContainer(createRootNavigator());

console.disableYellowBox = true;

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <SessionProvider>
        {(session: SessionState) =>
          session && <Navigator sessionContext={session} />
        }
      </SessionProvider>
    );
  }
}

export default App;
