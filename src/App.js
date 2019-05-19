import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import AlertModal from "./components/modals/alertModal";
import Loading from "./components/Loading";
import ModalProvider from "./context/modalContext";
import SessionProvider from "./context/sessionContext";
import createRootNavigator from "./routers/RootNavigator";

console.disableYellowBox = true;

const Navigator = createAppContainer(createRootNavigator);

class App extends Component {
  render() {
    return (
      <ModalProvider>
        <SessionProvider>
          <Navigator />
          <AlertModal />
          <Loading />
        </SessionProvider>
      </ModalProvider>
    );
  }
}

export default App;
