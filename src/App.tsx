import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';
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
        {(session: SessionState) => [
          session && <Navigator sessionContext={session} />,
          <View />,
        ]}
        <Navigator />
      </SessionProvider>
    );
  }
}

export default App;
