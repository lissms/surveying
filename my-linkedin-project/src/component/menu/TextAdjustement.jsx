import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
//STYLES
import { LabelStyled, ContentMiniComponetStyled, AdjustementStyled } from "./menu.styled";
//IMAGES
import left from "../../images/left-icon.png";
import center from "../../images/center-icon.png";
import right from "../../images/right-icon.png";
//REDUX
import { connect } from "react-redux";
//actions
import { changeTextAjustement } from "../../actions/actions";

//crear un objeto
const ButtonsProperties = {
  height: "24px",
  width: "24px",
  borderRd: "4px",
  background: " #F5F5F5",
  marginLf: "6px",
  display: "flex",
  justify: "center",
  alignItm: "center",
  cursor: "pointer",
};

function TextAdjustement(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Text adjustement</LabelStyled>
      <AdjustementStyled>
        <Button {...ButtonsProperties} onClick={() => props.changeText("left")}>
          <img src={left} alt="left" />
        </Button>

        <Button {...ButtonsProperties} onClick={() => props.changeText("center")}>
          <img src={center} alt="center" />
        </Button>
        <Button {...ButtonsProperties} onClick={() => props.changeText("right")}>
          <img src={right} alt="right" />
        </Button>
      </AdjustementStyled>
    </ContentMiniComponetStyled>
  );
}

const mapDispatchToProps = {
  changeText: changeTextAjustement,
};

export default connect(null, mapDispatchToProps)(TextAdjustement);
