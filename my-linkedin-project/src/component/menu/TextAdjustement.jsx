import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
//STYLES
import { LabelStyled, ContentMiniComponetStyled, AdjustementStyled } from "./menu.styled";
//IMAGES
import left from "../../images/left-icon.png";
import center from "../../images/center-icon.png";
import right from "../../images/right-icon.png";

function TextAdjustement(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Text adjustement</LabelStyled>
      <AdjustementStyled>
        <Button
          height="24px"
          width="24px"
          borderRd="4px"
          background=" #F5F5F5"
          marginLf="6px"
          display="flex"
          justify="center"
          alignItm="center"
        >
          <img src={left} alt="left" />
        </Button>
        <Button
          height="24px"
          width="24px"
          borderRd="4px"
          background=" #F5F5F5"
          marginLf="6px"
          display="flex"
          justify="center"
          alignItm="center"
        >
          <img src={center} alt="left" />
        </Button>
        <Button
          height="24px"
          width="24px"
          borderRd="4px"
          background=" #F5F5F5"
          marginLf="6px"
          display="flex"
          justify="center"
          alignItm="center"
        >
          <img src={right} alt="left" />
        </Button>
      </AdjustementStyled>
    </ContentMiniComponetStyled>
  );
}

export default TextAdjustement;
