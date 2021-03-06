import styled from "styled-components";

export const TitleStyled = styled.h3`
  color: ${(props) => `${props.textColor}`};
  text-align: ${(props) => `${props.textAjustement}`};
  font-size: ${(props) => `${props.fontSize}`};
`;
