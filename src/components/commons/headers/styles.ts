import styled from 'styled-components';

const HeaderContainer = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const HeaderText = styled.Text`
  color: ${props => (props.title ? '#000' : '#EA0F67')};
  font-size: ${props => (props.title ? '18' : '14')};
  font-family: 'Gotham-Bold';
  align-self: center;
`;

export { HeaderContainer, HeaderText };
