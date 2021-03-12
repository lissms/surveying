import React from "react";
import Button from "./Button";
import { Label, ContentMiniComponet, Adjustement } from "./menu.styled";

function TextAdjustement(props) {
  return (
    <ContentMiniComponet>
      <Label>Text adjustement</Label>
      <Adjustement>
        <Button height="24px" width="24px" borderRd="4px" background=" #F5F5F5" content="im" marginLf="6px"></Button>
        <Button height="24px" width="24px" borderRd="4px" background=" #F5F5F5" content="im" marginLf="6px"></Button>
        <Button height="24px" width="24px" borderRd="4px" background=" #F5F5F5" content="im" marginLf="6px"></Button>
      </Adjustement>
    </ContentMiniComponet>
  );
}

export default TextAdjustement;
