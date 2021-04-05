import styled from "styled-components";

export const BtnStyled = styled.div`
  background: ${(props) => `${props.background}`};
  background-image: ${(props) => `url(${props.backgroundImg})`};
  border: ${(props) => `${props.border}`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  color: ${(props) => `${props.color}`};
  border-radius: ${(props) => `${props.borderRd}`};
  margin-left: ${(props) => `${props.marginLf}`};
  margin-right: ${(props) => `${props.marginRg}`};
  display: ${(props) => `${props.display}`};
  justify-content: ${(props) => `${props.justify}`};
  align-items: ${(props) => `${props.alignItm}`};
  color: ${(props) => `${props.color}`};
  cursor: ${(props) => `${props.cursor}`};
  margin-top: ${(props) => `${props.marginTop}`};
  font-size: 10px;
  background-size: cover;
`;
