import React from "react";
import TextColor from "./TextColor";
import FontSize from "./FontSize";
import TextAdjustement from "./TextAdjustement";
import Modal from "../modal/Modal";
import { ContentStyleSelector } from "./menu.styled";

//REDUX
import { connect } from "react-redux";
//actions
import { chageTextColor, openCloseTextColorModal } from "../../actions/actions";

function StyleSelector(props) {
  return (
    <ContentStyleSelector>
      <TextColor></TextColor>
      <FontSize></FontSize>
      <TextAdjustement></TextAdjustement>
      <Modal
        isOpen={props.isOpen}
        onSave={(color) => props.changeColorTitle(color)}
        onCloseModal={props.CloseTextColorModal}
      />
    </ContentStyleSelector>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.isOpenTextModal,
});

const mapDispatchToProps = {
  changeColorTitle: chageTextColor,
  CloseTextColorModal: openCloseTextColorModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelector);
