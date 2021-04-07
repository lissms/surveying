import React from "react";
//STYLES
import { TitleStyled } from "./Title.Styled";

function Title(props) {
  return (
    <div>
      <TitleStyled color="red" textAjustement="center" fontSize="12px">
        {props.title}
      </TitleStyled>
    </div>
  );
}

export default Title;
