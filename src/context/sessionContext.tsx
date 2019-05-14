import React, { PureComponent, createContext } from 'react';

const SessionContext = createContext<State | null>(null);
const { Provider, Consumer } = SessionContext;

export interface State {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  email: string;
  features: {};
}

class SessionProvider extends PureComponent<State> {
  state: State = {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    features: {},
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer, SessionContext };

export default SessionProvider;
