import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import Loading from "./components/Loading";
import AlertModal from "./components/modals/alertModal/index";
import SessionProvider, {
  State as SessionState,
} from "./context/sessionContext";
import createRootNavigator from "./routers/RootNavigator";

const Navigator = createAppContainer(createRootNavigator());

const Props = {};
class App extends Component<Props> {
  public render() {
    return (
      <SessionProvider>
        {(session: SessionState) => [
          session && <Navigator sessionContext={session} />,
          <AlertModal />,
          <Loading loading={modalContext.showLoading} />,
        ]}
        <Navigator />
      </SessionProvider>
    );
  }
}

export default App;
