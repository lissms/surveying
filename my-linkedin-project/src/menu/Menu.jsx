import React from "react";
import { Title, MenuContent, InputText } from "./menu.styled";
import { Header } from "../surveging/surveyingLanding.styled";
import StyleSelector from "./StyleSelector";
import BackgroundSections from "./BackgroundSections";
import OptionsSections from "./OptionsSections";

function Menu(props) {
  return (
    <>
      <Header>
        <h1>Surveying</h1>
      </Header>
      <MenuContent>
        <Title>Title</Title>
        <InputText type="text" name="Title" id="title" placeholder="Whire your survey title" />
        <StyleSelector></StyleSelector>

        <Title>Background</Title>
        <BackgroundSections></BackgroundSections>
        <Title>Options</Title>
        <OptionsSections></OptionsSections>
      </MenuContent>
    </>
  );
}

export default Menu;
