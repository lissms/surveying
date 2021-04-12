import React from "react";

//COMPOTENTS
import StyleSelector from "./StyleSelector";
import BackgroundSections from "./BackgroundSections";
import OptionsSections from "./OptionsSections";
/* import Button from "../generalComponents/Buttons"; */

//STYLES
import { TitleStyled, MenuContentStyled, InputTextStyled, HeaderMenuStyled, CloseMenuStyled } from "./menu.styled";

//REDUX
import { connect } from "react-redux";

//actions

import { changeTitle } from "../../actions/actions";
import { openCloseMenu } from "../../actions/actions";

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
          <TitleStyled>Options</TitleStyled>
          <OptionsSections></OptionsSections>
        </div>
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
