import React from "react";
import StyleSelector from "./StyleSelector";
import { TitleStyled, InputTextStyled } from "./menu.styled";
import { OptionChoose } from "./OptionChooseStyles.styled";
import ChooseEmoticon from "./ChooseEmoticon";

//REDUX
import { connect } from "react-redux";
import { changeOptionText } from "../../actions/actions";

function OptionChooseStyles(props) {
  return (
    <OptionChoose hasFlag={props.hasFlag}>
      <TitleStyled>Choose Emoticon</TitleStyled>
      <ChooseEmoticon optionsId={props.optionsId}></ChooseEmoticon>
      <TitleStyled>Text</TitleStyled>
      <InputTextStyled
        type="text"
        name="Title"
        id="title"
        placeholder="Write options text"
        onChange={(ev) => {
          props.changeOptionText(props.optionsId, ev.target.value);
        }}
      />
      <StyleSelector optionsId={props.optionsId}></StyleSelector>
    </OptionChoose>
  );
}

const mapDispatchToProps = {
  changeOptionText,
};

export default connect(null, mapDispatchToProps)(OptionChooseStyles);
