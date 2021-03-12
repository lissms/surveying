import React from "react";
import { Btn } from "./button.styled";

function Button(props) {
  return (
    <Btn
      background={props.background}
      border={props.border}
      borderRd={props.borderRd}
      height={props.height}
      width={props.width}
      marginLf={props.marginLf}
    >
      {props.content}
    </Btn>
  );
}

export default Button;
