import styled from "styled-components";

export const OptionChoose = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 200px;
  height: ${(props) => (props.hasFlag ? `300px;` : ` 1px;`)};
  transition: height ease 0.4s;
`;
