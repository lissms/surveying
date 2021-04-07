import React from "react";
// IMAGES
import heart from "../../../images/linkedin-reacciones-1.png";
//STYLES
import { TextOptionStyles, OptionStyles } from "./Options.Styled";

function Options(props) {
  return (
    <OptionStyles>
      <img src={heart} alt="heart" />
      <TextOptionStyles>react</TextOptionStyles>
    </OptionStyles>
  );
}

export default Options;
