import styled from "styled-components";

export const Btn = styled.div`
  background-color: ${(props) => `${props.background}`};
  border: ${(props) => `${props.border}`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  color: ${(props) => `${props.color}`};
  border-radius: ${(props) => `${props.borderRd}`};
  margin-left: ${(props) => `${props.marginLf}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;
