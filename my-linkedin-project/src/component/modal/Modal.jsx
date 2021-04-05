import React from "react";
//COMPONENT
import Button from "../generalComponents/Buttons";
import PalettteColors from "./PaleteColors";
//STYLES
import {
  ModalWindowStyled,
  OptionStyles,
  TitleStyles,
  ModalStyled,
  HexadesimalColorStyles,
  ColorTextStyles,
} from "./Modal.Styled";

function Modal(props) {
  return (
    <ModalStyled>
      <ModalWindowStyled>
        <OptionStyles>
          <TitleStyles> Change color</TitleStyles>
          <Button
            background="#313468"
            borderRd="200%"
            height="17px"
            width="17px"
            display="flex"
            justify="center"
            alignItm="center"
            color="#FFFFFF"
            marginRg="10px"
            cursor="pointer"
          >
            X
          </Button>
        </OptionStyles>
        <PalettteColors></PalettteColors>
        <HexadesimalColorStyles>
          <ColorTextStyles>Color (soom)</ColorTextStyles>
          <Button
            border="solid 1px #a6a6a6"
            background="#ebebeb"
            height="28px"
            width="98px"
            color="#959595"
            display="flex"
            justify="center"
            alignItm="center"
            borderRd="5px"
          >
            Hexadesimal color
          </Button>
        </HexadesimalColorStyles>
        <Button
          cursor="pointer"
          background="#313468"
          height="30px"
          width="68px"
          color="#ffffff"
          display="flex"
          justify="center"
          alignItm="center"
          borderRd="5px"
          marginTop="15px"
        >
          ✓ Save
        </Button>
      </ModalWindowStyled>
    </ModalStyled>
  );
}

export default Modal;
