import styled from "styled-components";

export const ListStyles = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  & .emoticon {
    border: ${(props) => `${props.isEmoticonSelected === true ? "solid 5px blue" : "none"}`};
  }
`;
