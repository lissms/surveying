import React from "react";
//STYLES
import { TitleStyled } from "./Title.Styled";

function Title(props) {
  return (
    <div>
      <TitleStyled color="red" textAjustement={props.textAjustement} fontSize={props.fontSize}>
        {props.title}
      </TitleStyled>
    </div>
  );
}

export default Title;
