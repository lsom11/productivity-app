import React from "react";
import styled from "styled-components";

import PasswordInput from "./passwordInput";

const Input = styled.TextInput`
  height: ${props => (props.textarea ? "40%" : "50px")};
  width: ${props => (props.contain ? "" : "100%")};
  border: 1px solid #9b9a9b;
  border-radius: 4px;
  margin: ${props => (props.margin ? "4% 0" : "0 0 4% 0")};
  padding: 0 2.5%;
  color: ${props => props.color || "#000"};
  font-weight: 700;
  line-height: 24px;
`;

const NoBorderInput = styled.TextInput`
  height: ${props => (props.textarea ? "70%" : "50px")};
  width: ${props => (props.contain ? "" : "100%")};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.color || "#000"};
  border-radius: 4px;
  margin: ${props => (props.margin ? "4% 0" : "0 0 4% 0")};
  padding: 0 2.5%;
  color: ${props => props.color || "#000"};
  font-weight: 700;
`;

export { Input, PasswordInput, NoBorderInput };
