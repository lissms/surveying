import React from "react";
import { LabelStyled, ContentMiniComponetStyled } from "./menu.styled";
import { SelectFontSizeStyled } from "./fontSize.styled";

function FontSize(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Font size</LabelStyled>
      <SelectFontSizeStyled name="fontSize">
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
      </SelectFontSizeStyled>
    </ContentMiniComponetStyled>
  );
}

export default FontSize;
