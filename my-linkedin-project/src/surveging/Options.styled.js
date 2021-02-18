import styled from "styled-components";

export const TextOptions = styled.p`
  color: ${(props) => `${props.texColor}`};
  text-align: ${(props) => `${props.textAjustement}`};
  font-size: ${(props) => `${props.fontSize}`};
`;
