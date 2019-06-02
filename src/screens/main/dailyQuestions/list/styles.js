import styled from "styled-components";

const CardContainer = styled.View`
  width: 100%;
  height: 140px;
  background-color: ${props => props.backgroundColor || "#000"};
  border-radius: 4px;
  margin: 2.5% 0;
  padding: 2.5%;
`;

const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const GradeContainer = styled.View`
  margin-top: ${props => (props.marginTop ? "2.5%" : 0)};
  height: 50%;
  width: 100%;
`;

const QuestionText = styled.Text`
  color: ${props => props.color};
  font-size: 20px;
`;

export { CardContainer, TitleContainer, GradeContainer, QuestionText };
