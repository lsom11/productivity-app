import React, { PureComponent, createContext } from 'react';
import DeviceInfo from 'react-native-device-info';

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
}

class SessionProvider extends PureComponent<State> {
  state: State = {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    features: {},
    appText: {},
  };

  async componentDidMount() {
    const deviceLocale = await DeviceInfo.getDeviceLocale();
    const appText = await getConfiguration(deviceLocale);
    this.setState({ appText });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, SessionContext };

export default SessionProvider;
