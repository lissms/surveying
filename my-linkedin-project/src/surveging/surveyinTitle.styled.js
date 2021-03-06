import styled from "styled-components";

export const Title = styled.h3`
  color: ${(props) => `${props.color}`};
  text-align: ${(props) => `${props.textAjustement}`};
  font-size: ${(props) => `${props.fontSize}`};
`;
