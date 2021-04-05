import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
//SETTINGS
import { colors } from "../../settings/colors.js";
//STYLES
import { PaleteStyles } from "./PaleteColors.Styled";

function PaleteColors(props) {
  return (
    <PaleteStyles>
      {colors.map((color) => {
        return <Button background={color.color} height="24px" width="44px" cursor="pointer"></Button>;
      })}
    </PaleteStyles>
  );
}

export default PaleteColors;
