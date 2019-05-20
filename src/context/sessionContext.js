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
      backgroundColor: "#345292",
      primaryColor: "#000",
      secondaryColor: "#345292",
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
      appText = englishText;
    } else {
      appText = portugueseText;
    }
    this.setState({ appText, locale: deviceLocale });
  };

  checkLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);

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
