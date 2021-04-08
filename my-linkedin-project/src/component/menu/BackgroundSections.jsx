import React from "react";
import Button from "../generalComponents/Buttons";
import { InputRadio, ColorImageSelector, Color, Image } from "./backgroundSelector.styled";
//IMAGES
import paletteColor from "../../images/palette-colors.png";
//REDUX
import { connect } from "react-redux";
//actions
import { openCloseColorPalette } from "../../actions/actions";

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
          backgroundImg={paletteColor}
          onClick={() => props.openPalette(false)}
        ></Button>
      </Color>
      <Image>
        <InputRadio type="radio" name="background" id="background" value="mediodia" disabled="disabled"></InputRadio>
        <label>Image (soon)</label>
        <Button height="32px" width="183px" borderRd="4px" background="  #D6D6D9" content="Upload image"></Button>
      </Image>
    </ColorImageSelector>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = {
  openPalette: openCloseColorPalette,
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundSections);
