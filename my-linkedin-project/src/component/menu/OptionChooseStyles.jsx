import React from "react";
import StyleSelector from "./StyleSelector";
import { TitleStyled, MenuContentStyled, InputTextStyled } from "./menu.styled";
import { OptionChoose } from "./OptionChooseStyles.styled";
import ChooseEmoticon from "./ChooseEmoticon";

function OptionChooseStyles(props) {
  return (
    <OptionChoose hasFlag={props.hasFlag}>
      <TitleStyled>Choose Emoticon</TitleStyled>
      <ChooseEmoticon></ChooseEmoticon>
      <TitleStyled>Text</TitleStyled>
      <InputTextStyled type="text" name="Title" id="title" placeholder="Write options text" />
      <StyleSelector></StyleSelector>
    </OptionChoose>
  );
}

export default OptionChooseStyles;
