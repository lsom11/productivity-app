import React, { createContext, PureComponent } from "react";
import DeviceInfo from "react-native-device-info";
import englishText from "../config/english.json";
import portugueseText from "../config/portuguese.json";

import { getConfiguration } from "../fetch/config";

const SessionContext = createContext<State | null>(null);
const { Provider, Consumer } = SessionContext;

export interface IState {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  email: string;
  features: {};
  appText: {};
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
}

class SessionProvider extends PureComponent<IState> {
  public state: State = {
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

  public getDeviceLanguage = async () => {
    const deviceLocale = await DeviceInfo.getDeviceLocale();
    let appText;
    if (deviceLocale === "en" || "en-US") {
      appText = englishText;
    } else {
      appText = portugueseText;
    }
    this.setState({ appText });
  };

  public async componentDidMount() {
    await this.getDeviceLanguage();
  }

  public render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, SessionContext };

export default SessionProvider;
