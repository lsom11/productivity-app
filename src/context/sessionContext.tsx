import React, { PureComponent, createContext } from 'react';
import DeviceInfo from 'react-native-device-info';
import englishText from '../config/english.json';
import portugueseText from '../config/portuguese.json';

import { getConfiguration } from '../fetch/config';

const SessionContext = createContext<State | null>(null);
const { Provider, Consumer } = SessionContext;

export interface State {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  email: string;
  features: {};
  appText: {};
  theme: {
    primaryColor: string,
    secondaryColor: string
  };
}

class SessionProvider extends PureComponent<State> {
  state: State = {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    features: {},
    appText: {},
    theme: {
      primaryColor: '#000';
      secondaryColor: '#EB0F68';
    };
  };

  getDeviceLanguage = async () => {
    const deviceLocale = await DeviceInfo.getDeviceLocale();
    let appText;
    if (deviceLocale == 'en' || 'en-US') appText = englishText;
    else appText = portugueseText;
    this.setState({ appText }, () => console.log(appText));
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
