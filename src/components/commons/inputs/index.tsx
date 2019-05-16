import React from 'react';
import styled from 'styled-components';

import PasswordInput from './passwordInput';

const Input = styled.TextInput`
  height: 50px;
  width: ${props => (props.contain ? '' : '100%')};
  border: 1px solid #9b9a9b;
  border-radius: 4px;
  margin: ${props => (props.margin ? '1.5% 0' : '4% 0')};
  padding: 0 2.5%;
  color: #000;
  font-weight: 700;
`;

export { Input, PasswordInput };
