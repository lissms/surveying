import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
// STYLES
import { LabelStyled, ContentMiniComponetStyled } from "./menu.styled.js";
//IMAGES
import paletteColor from "../../images/palette-colors.png";

function TextColor(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Text color</LabelStyled>
      <Button
        height="24px"
        width="44px"
        borderRd="4px"
        border="1px solid #313468"
        backgroundImg={paletteColor}
      ></Button>
    </ContentMiniComponetStyled>
  );
}

export default TextColor;
