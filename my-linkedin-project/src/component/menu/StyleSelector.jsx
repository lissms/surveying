import React from "react";
import TextColor from "./TextColor";
import FontSize from "./FontSize";
import TextAdjustement from "./TextAdjustement";
import Modal from "../modal/Modal";
import { ContentStyleSelector } from "./menu.styled";

//REDUX
import { connect } from "react-redux";
//actions
import { openCloseTextColorModal } from "../../actions/actions";

function StyleSelector(props) {
  return (
    <ContentStyleSelector>
      <TextColor optionsId={props.optionsId}></TextColor>
      <FontSize optionsId={props.optionsId}></FontSize>
      <TextAdjustement optionsId={props.optionsId}></TextAdjustement>
      <Modal
        optionsId={props.optionsId}
        isOpen={props.isOpen}
        onSave={props.onSave}
        onCloseModal={props.CloseTextColorModal}
      />
    </ContentStyleSelector>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.isOpenTextModal,
});

const mapDispatchToProps = {
  CloseTextColorModal: openCloseTextColorModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelector);
