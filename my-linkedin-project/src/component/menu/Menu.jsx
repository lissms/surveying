import React from "react";
//COMPOTENT
import StyleSelector from "./StyleSelector";
import BackgroundSections from "./BackgroundSections";
import OptionsSections from "./OptionsSections";
import Button from "../generalComponents/Buttons";
//STYLES
import { TitleStyled, MenuContentStyled, InputTextStyled, Headermenu } from "./menu.styled";

//REDUX
import { connect } from "react-redux";
//actions

import { changeTitle } from "../../actions/actions";
import { openCloseMenu } from "../../actions/actions";

function Menu(props) {
  return (
    <>
      <MenuContentStyled isOpen={props.isOpen}>
        <Headermenu>
          <TitleStyled>Title</TitleStyled>
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
            onClick={() => props.closeMenu(true)}
          >
            X
          </Button>
        </Headermenu>

        <InputTextStyled
          type="text"
          name="Title"
          id="title"
          placeholder="Whire your survey title"
          value={props.title}
          onChange={(event) => props.changeTitleProp(event.target.value)}
        />
        <StyleSelector></StyleSelector>

        <TitleStyled>Background</TitleStyled>
        <BackgroundSections></BackgroundSections>
        <TitleStyled>Options</TitleStyled>
        <OptionsSections></OptionsSections>
      </MenuContentStyled>
    </>
  );
}
const mapStateToProps = (state) => ({
  title: state.title,
  isOpen: state.isOpenMenu,
});

const mapDispatchToProps = {
  changeTitleProp: changeTitle,
  closeMenu: openCloseMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
