import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
// STYLES
import { LabelStyled, ContentMiniComponetStyled } from "./menu.styled.js";
//IMAGES
import paletteColor from "../../images/palette-colors.png";
//REDUX
import { connect } from "react-redux";
//actions
import { openCloseColorPalette } from "../../actions/actions";

function TextColor(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Text color</LabelStyled>
      <Button
        isOpen={props.isOpen}
        height="24px"
        width="44px"
        borderRd="4px"
        border="1px solid #313468"
        backgroundImg={paletteColor}
        cursor="pointer"
        onClick={() => props.openPalette(false)}
      ></Button>
    </ContentMiniComponetStyled>
  );
}
const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = {
  openPalette: openCloseColorPalette,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextColor);
