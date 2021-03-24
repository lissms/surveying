import React from "react";
import StyleSelector from "./StyleSelector";
import { Title, MenuContent, InputText } from "./menu.styled";
import { OptionChoose } from "./OptionChooseStyles.styled";
import ChooseEmoticon from "./ChooseEmoticon";

function OptionChooseStyles(props) {
  return (
    <OptionChoose hasFlag={props.hasFlag}>
      <Title>Choose Emoticon</Title>
      <ChooseEmoticon></ChooseEmoticon>
      <Title>Text</Title>
      <InputText type="text" name="Title" id="title" placeholder="Write options text" />
      <StyleSelector></StyleSelector>
    </OptionChoose>
  );
}

export default OptionChooseStyles;
