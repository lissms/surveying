import React from "react";

//COMPOTENTS
import StyleSelector from "./StyleSelector";
import BackgroundSections from "./BackgroundSections";
import OptionsSections from "./OptionsSections";
import Button from "../generalComponents/Buttons";

//STYLES
import {
  TitleStyled,
  MenuContentStyled,
  InputTextStyled,
  HeaderMenuStyled,
  CloseMenuStyled,
  TextButtonStyles,
  HeaderObtionsStyles,
} from "./menu.styled";

//REDUX
import { connect } from "react-redux";

//actions

import { changeTitle } from "../../actions/actions";
import { openCloseMenu, addNewOption, removeOption } from "../../actions/actions";

function Menu(props) {
  return (
    <>
      <MenuContentStyled isOpen={props.isOpen}>
        <CloseMenuStyled onClick={() => props.closeMenu(true)} />
        <div className="menu">
          <HeaderMenuStyled>
            <TitleStyled>Title</TitleStyled>
          </HeaderMenuStyled>

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
          <HeaderObtionsStyles>
            <TitleStyled>Options</TitleStyled>

            <Button
              background=" #313468"
              borderRd="2px"
              height="26px"
              width="26px"
              display="flex"
              justify="center"
              alignItm="center"
              cursor="pointer"
              onClick={props.addOption}
            >
              <TextButtonStyles>+</TextButtonStyles>
            </Button>
          </HeaderObtionsStyles>

          <OptionsSections />
        </div>
      </MenuContentStyled>
    </>
  );
}
const mapStateToProps = (state) => ({
  title: state.title,
  isOpen: state.isOpenMenu,
  options: state.options,
});

const mapDispatchToProps = {
  changeTitleProp: changeTitle,
  closeMenu: openCloseMenu,
  addOption: addNewOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
