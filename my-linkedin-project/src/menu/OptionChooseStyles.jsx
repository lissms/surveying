import React from "react";
import StyleSelector from "./StyleSelector";
import { connect } from "react-redux";
import { Title, MenuContent, InputText } from "./menu.styled";
import { OptionChoose } from "./OptionChooseStyles.styled";
import ChooseEmoticon from "./ChooseEmoticon";

function OptionChooseStyles(props) {
  return (
    <OptionChoose hasFlag={props.hasFlag}>
      <Title>Choose Emoticon</Title>
      <ChooseEmoticon></ChooseEmoticon>
      <Title>Text</Title>
      <InputText
        type="text"
        name="Title"
        id="title"
        placeholder="Write options text"
        value={props.textProp}
        onChange={(event) => props.changeTitleProp(event.target.value)}
      />
      <StyleSelector></StyleSelector>
    </OptionChoose>
  );
}
const mapStateToProps = (state) => ({
  textProp: state.options[0].name,
});

const mapDispatchToProps = (dispatch) => ({
  changeTitleProp: function (newOptionText) {
    const action = { type: "CHANGE_OPTION_TEXT", payload: newOptionText };
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionChooseStyles);
