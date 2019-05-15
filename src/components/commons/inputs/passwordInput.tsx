import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Platform } from 'react-native';
import styled, { css } from 'styled-components';

const Container = styled.View`
  height: 50px;
  width: 100%;
  border: 1px solid #9b9a9b;
  border-radius: 4px;
  margin: ${props => (props.margin ? '4% 0' : 0)};
  z-index: -1;

  padding: 0 2.5%;
  ${Platform.select({
    ios: css`
      padding-left: 2%;
    `,
    android: css`
      padding-left: 1.5%;
    `,
  })};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  color: #000;
  flex: 1;
  font-weight: 700;
`;

export default class PasswordInputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icEye: 'visibility-off',
      password: false,
    };
  }

  changePwdType = () => {
    let newState;
    if (this.state.password) {
      newState = {
        icEye: 'visibility-off',
        password: false,
      };
    } else {
      newState = {
        icEye: 'visibility',
        password: true,
      };
    }

    // set new state value
    this.setState(newState);
  };

  render() {
    const { marginBottom } = this.props;
    return (
      <Container marginBottom={marginBottom}>
        <Input
          style={{ height: 50 }}
          {...this.props}
          secureTextEntry={!this.state.password}
        />
        <Icon
          name={this.state.icEye}
          size={this.props.iconSize}
          color={this.props.iconColor}
          onPress={this.changePwdType}
        />
      </Container>
    );
  }
}

PasswordInputText.defaultProps = {
  iconSize: 25,
  label: 'Password',
  iconColor: '#9B9A9B',
};
