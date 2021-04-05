import React from "react";
import TextColor from "./TextColor";
import FontSize from "./FontSize";
import TextAdjustement from "./TextAdjustement";
import { ContentStyleSelector } from "./menu.styled";

function StyleSelector(props) {
  return (
    <ContentStyleSelector>
      <TextColor></TextColor>
      <FontSize></FontSize>
      <TextAdjustement></TextAdjustement>
    </ContentStyleSelector>
  );
}

export default StyleSelector;
