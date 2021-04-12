import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
//SETTINGS
import { colors } from "../../settings/colors.js";
//STYLES
import { PaleteStyles } from "./PaleteColors.Styled";
//REDUX
import { connect } from "react-redux";
//actions
import { chageTextColor, chageBackgroundColor } from "../../actions/actions";

function PaleteColors(props) {
  return (
    <PaleteStyles>
      {colors.map((color, i) => {
        return (
          <Button
            key={i}
            background={color.color}
            height="24px"
            width="44px"
            cursor="pointer"
            onClick={() => props.onSelectColor(color.color)}
          ></Button>
        );
      })}
    </PaleteStyles>
  );
}

export default PaleteColors;
