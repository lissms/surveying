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
import { openCloseTextColorModal } from "../../actions/actions";

function TextColor(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Text color</LabelStyled>
      <Button
        height="24px"
        width="44px"
        borderRd="4px"
        border="1px solid #313468"
        cursor="pointer"
        background={props.textColor || paletteColor}
        onClick={() => props.openPalette(false)}
      ></Button>
    </ContentMiniComponetStyled>
  );
}
const mapStateToProps = (state) => ({
  isOpen: state.isOpenTextModal,
  textColor: state.textColor,
});

const mapDispatchToProps = {
  openPalette: openCloseTextColorModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextColor);
