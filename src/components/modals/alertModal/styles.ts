import styled from "styled-components";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ContentContainer = styled.View`
  width: 90%;
  background-color: #ffffff;
  border-radius: 3px;
  align-items: center;
  padding: 24px;
`;

const TitleText = styled.Text`
  color: #000;
  font-size: 20px;
`;

const Text = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  text-decoration-color: ${props =>
    props.underlineColor ? props.underlineColor : "transparent"};
  text-align: center;
  margin-top: ${props => props.marginTop || 0};
`;

export { Container, ContentContainer, TitleText, Text };
