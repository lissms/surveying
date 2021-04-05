import React from "react";
import Button from "./Button";
import { Label, ContentMiniComponet } from "./menu.styled.js";

function TextColor(props) {
  return (
    <ContentMiniComponet>
      <Label>Text color</Label>
      <Button
        height="24px"
        width="44px"
        borderRd="4px"
        border="1px solid #313468"
        background=" #686EDB"
        onClick={() => props.changeTitleProp()}
      ></Button>
    </ContentMiniComponet>
  );
}

export default TextColor;
