import React, { createContext, PureComponent } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import DeviceInfo from "react-native-device-info";
import englishText from "../config/english.json";
import portugueseText from "../config/portuguese.json";

import { getConfiguration } from "../fetch/config";
import { userInfo } from "../fetch/user.js";

const SessionContext = createContext(null);
const { Provider, Consumer } = SessionContext;

class SessionProvider extends PureComponent {
  state = {
    appText: {},
    features: {},
    isLoggedIn: false,

    setLogin: (user, token) => {
      this.setState(
        {
          isLoggedIn: true,
          token,
          user,
        },
        () => this.storeInfo(),
      );
    },
    theme: {
      backgroundColor: "#E5E5E5",
      buttonBackgroundColor: "#204476",
      buttonTextColor: "#E5E5E5",
      disabledBackgroundColor: "#979797",
      disabledTextColor: "rgba(0, 0, 0, 0.87)",
      iconColor: "#204476",
      primaryColor: "#204476",
      secondaryColor: "#979797",
      whiteColor: "#fff",
    },
    token: null,
    user: {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
    },
  };

  storeInfo = async () => {
    const { token } = this.state;
    await AsyncStorage.setItem("token", token);
  };

  getDeviceLanguage = async () => {
    const deviceLocale = await DeviceInfo.getDeviceLocale();
    let appText;
    if (deviceLocale === "en" || "en-US") {
      // appText = portugueseText;
      appText = englishText;
    } else {
      appText = portugueseText;
    }
    this.setState({ appText, locale: deviceLocale });
  };

  checkLogin = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const user = await userInfo(token);
      this.state.setLogin(user, token);
    }
  };

  async componentDidMount() {
    await this.getDeviceLanguage();
    await this.checkLogin();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, SessionContext };

export default SessionProvider;
