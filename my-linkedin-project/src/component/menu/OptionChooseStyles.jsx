import React from "react";
import StyleSelector from "./StyleSelector";
import { TitleStyled, InputTextStyled } from "./menu.styled";
import { OptionChoose } from "./OptionChooseStyles.styled";
import ChooseEmoticon from "./ChooseEmoticon";
import Modal from "../modal/Modal";

//REDUX
import { connect } from "react-redux";
import { changeOptionText, chageTextColor, changeOptionColor } from "../../actions/actions";
//actions
import { openCloseTextColorModal } from "../../actions/actions";

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
      <StyleSelector
        optionsId={props.optionsId}
        onSave={(color) => {
          debugger;
          props.changeOptionColor(color, props.optionsId);
        }}
      >
        <Modal
          optionsId={props.optionsId}
          isOpen={props.isOpen}
          onSave={props.onSave}
          onCloseModal={props.CloseTextColorModal}
        />
      </StyleSelector>
    </OptionChoose>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.isOpenTextModal,
});

const mapDispatchToProps = {
  changeOptionText,
  changeColorTitle: chageTextColor,
  changeOptionColor,
  CloseTextColorModal: openCloseTextColorModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionChooseStyles);
