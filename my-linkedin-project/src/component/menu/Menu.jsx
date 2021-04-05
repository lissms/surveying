import React from "react";

import { TitleStyled, MenuContentStyled, InputTextStyled } from "./menu.styled";
import StyleSelector from "./StyleSelector";
import BackgroundSections from "./BackgroundSections";
import OptionsSections from "./OptionsSections";

function Menu(props) {
  return (
    <>
      <MenuContentStyled>
        <TitleStyled>Title</TitleStyled>
        <InputTextStyled type="text" name="Title" id="title" placeholder="Whire your survey title" value="" />
        <StyleSelector></StyleSelector>

        <TitleStyled>Background</TitleStyled>
        <BackgroundSections></BackgroundSections>
        <TitleStyled>Options</TitleStyled>
        <OptionsSections></OptionsSections>
      </MenuContentStyled>
    </>
  );
}

export default Menu;
