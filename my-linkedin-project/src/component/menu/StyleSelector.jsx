import React from "react";
import TextColor from "./TextColor";
import FontSize from "./FontSize";
import TextAdjustement from "./TextAdjustement";

import { ContentStyleSelector } from "./menu.styled";

function StyleSelector(props) {
  return (
    <ContentStyleSelector>
      <TextColor optionsId={props.optionsId}></TextColor>
      <FontSize optionsId={props.optionsId}></FontSize>
      <TextAdjustement optionsId={props.optionsId}></TextAdjustement>
    </ContentStyleSelector>
  );
}

export default StyleSelector;
