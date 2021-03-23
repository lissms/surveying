import React from "react";
import Button from "./Button";
import { InputRadio, ColorImageSelector, Color, Image } from "./backgroundSelector.styled";

function BackgroundSections(props) {
  return (
    <ColorImageSelector>
      <Color>
        <InputRadio type="radio" name="background" id="background" value="mediodia"></InputRadio>
        <label>Color</label>
        <Button height="32px" width="44px" borderRd="4px" border="1px solid #313468" background="#F2CC4D"></Button>
      </Color>
      <Image>
        <InputRadio type="radio" name="background" id="background" value="mediodia" disabled="disabled"></InputRadio>
        <label>Image (soon)</label>
        <Button height="32px" width="183px" borderRd="4px" background="  #D6D6D9" content="Upload image"></Button>
      </Image>
    </ColorImageSelector>
  );
}

export default BackgroundSections;
