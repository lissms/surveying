import React from "react";
//STYLES
import { TitleStyled } from "./Title.Styled";

function Title(props) {
  return (
    <div>
      <TitleStyled textAjustement={props.textAjustement} fontSize={props.fontSize} textColor={props.textColor}>
        {props.title}
      </TitleStyled>
    </div>
  );
}

export default Title;
