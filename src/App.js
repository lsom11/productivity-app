import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import AlertModal from "./components/modals/alertModal";
import Loading from "./components/Loading";
import ModalProvider from "./context/modalContext";
import SessionProvider from "./context/sessionContext";
import createRootNavigator from "./routers/RootNavigator";
import { isSignedIn } from "./utils/auth";

console.disableYellowBox = true;

class App extends Component {
  state = {
    checkedSignIn: null,
    signedIn: null,
  };

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ checkedSignIn: true, signedIn: res }))
      .catch(err => this.setState({ checkedSignIn: true, signedIn: false }));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Navigator = createAppContainer(createRootNavigator(signedIn));
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
