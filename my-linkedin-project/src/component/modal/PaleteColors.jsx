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
import { chageTextColor } from "../../actions/actions";

function PaleteColors(props) {
  return (
    <PaleteStyles>
      {colors.map((color) => {
        return (
          <Button
            background={color.color}
            height="24px"
            width="44px"
            cursor="pointer"
            onClick={() => props.changeColor(color.color)}
          ></Button>
        );
      })}
    </PaleteStyles>
  );
}

const mapDispatchToProps = {
  changeColor: chageTextColor,
};

export default connect(null, mapDispatchToProps)(PaleteColors);
