import React from "react";
import { Label, ContentMiniComponet } from "./menu.styled";
import { SelectFontSize } from "./fontSize.styled";

function FontSize(props) {
  return (
    <ContentMiniComponet>
      <Label>Font size</Label>
      <SelectFontSize name="fontSize">
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
      </SelectFontSize>
    </ContentMiniComponet>
  );
}

export default FontSize;
