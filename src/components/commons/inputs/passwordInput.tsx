import React, { Component } from "react";
import { Platform, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styled, { css } from "styled-components";

const Container = styled.View`
  height: 50px;
  width: 100%;
  border: 1px solid #9b9a9b;
  border-radius: 4px;
  margin: ${props => (props.margin ? "4% 0" : 0)};
  z-index: -1;

  padding: 0 2.5%;
  ${Platform.select({
    android: css`
      padding-left: 1.5%;
    `,
    ios: css`
      padding-left: 2%;
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
      icEye: "visibility-off",
      password: false,
    };
  }

  public changePwdType = () => {
    let newState;
    if (this.state.password) {
      newState = {
        icEye: "visibility-off",
        password: false,
      };
    } else {
      newState = {
        icEye: "visibility",
        password: true,
      };
    }

    // set new state value
    this.setState(newState);
  };

  public render() {
    const { marginBottom } = this.props;
    return (
      <Container marginBottom={marginBottom}>
        <Input
          {...this.props}
          secureTextEntry={!this.state.password}
          style={{ height: 50 }}
        />
        <Icon
          color={this.props.iconColor}
          name={this.state.icEye}
          onPress={this.changePwdType}
          size={this.props.iconSize}
        />
      </Container>
    );
  }
}

PasswordInputText.defaultProps = {
  iconColor: "#9B9A9B",
  iconSize: 25,
  label: "Password",
};
