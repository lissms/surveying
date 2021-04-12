import React from "react";
import Button from "../generalComponents/Buttons";
import Modal from "../modal/Modal";
import { InputRadio, ColorImageSelector, Color, Image } from "./backgroundSelector.styled";
//IMAGES
import paletteColor from "../../images/palette-colors.png";
//REDUX
import { connect } from "react-redux";
//actions
import { openCloseBackgroundColorModal, chageBackgroundColor } from "../../actions/actions";

function BackgroundSections(props) {
  return (
    <ColorImageSelector>
      <Color>
        <InputRadio type="radio" name="background" id="background" value="mediodia"></InputRadio>
        <label>Color</label>
        <Button
          height="32px"
          width="44px"
          borderRd="4px"
          border="1px solid #313468"
          background={props.background || paletteColor}
          onClick={() => props.openBackgroundPalette(false)}
        ></Button>
      </Color>
      <Modal
        isOpen={props.isOpen}
        onSave={(color) => props.changeBackground(color)}
        onCloseModal={props.openBackgroundPalette}
      />
      <Image>
        <InputRadio type="radio" name="background" id="background" value="mediodia" disabled="disabled"></InputRadio>
        <label>Image (soon)</label>
        <Button height="32px" width="183px" borderRd="4px" background="  #D6D6D9" content="Upload image"></Button>
      </Image>
    </ColorImageSelector>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.isOpenBackgroundModal,
  background: state.background,
});

const mapDispatchToProps = {
  openBackgroundPalette: openCloseBackgroundColorModal,
  changeBackground: chageBackgroundColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSections);
