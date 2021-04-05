import styled from "styled-components";

export const TextOptionStyles = styled.p`
  color: ${(props) => `${props.texColor}`};
  text-align: ${(props) => `${props.textAjustement}`};
  font-size: ${(props) => `${props.fontSize}`};
  margin-left: 10px;
`;
export const OptionStyles = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
