import React, { createContext, PureComponent } from "react";
import DeviceInfo from "react-native-device-info";
import englishText from "../config/english.json";
import portugueseText from "../config/portuguese.json";

import { getConfiguration } from "../fetch/config";

const SessionContext = createContext(null);
const { Provider, Consumer } = SessionContext;

class SessionProvider extends PureComponent {
  state = {
    appText: {},
    email: "",
    features: {},
    firstName: "",
    isLoggedIn: false,
    lastName: "",
    theme: {
      primaryColor: "#000",
      secondaryColor: "#EB0F68",
    },
  };

  getDeviceLanguage = async () => {
    const deviceLocale = await DeviceInfo.getDeviceLocale();
    let appText;
    if (deviceLocale === "en" || "en-US") {
      appText = englishText;
    } else {
      appText = portugueseText;
    }
    this.setState({ appText });
  };

  async componentDidMount() {
    await this.getDeviceLanguage();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, SessionContext };

export default SessionProvider;
