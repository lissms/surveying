import React from "react";
import { BtnStyled } from "./Buttons.Styled";

function Button(props) {
  return (
    <BtnStyled
      background={props.background}
      backgroundImg={props.backgroundImg}
      border={props.border}
      borderRd={props.borderRd}
      height={props.height}
      width={props.width}
      marginLf={props.marginLf}
      display={props.display}
      justify={props.justify}
      alignItm={props.alignItm}
      color={props.color}
      marginRg={props.marginRg}
      cursor={props.cursor}
      marginTop={props.marginTop}
    >
      {props.children}
    </BtnStyled>
  );
}

export default Button;
