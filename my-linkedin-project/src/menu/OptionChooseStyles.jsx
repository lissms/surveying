import React from "react";
import StyleSelector from "./StyleSelector";
import { Title, MenuContent, InputText } from "./menu.styled";

function OptionChooseStyles(props) {
  return (
    <div>
      <Title>Text</Title>
      <InputText type="text" name="Title" id="title" placeholder="Write options text" />
      <StyleSelector></StyleSelector>
    </div>
  );
}

export default OptionChooseStyles;
