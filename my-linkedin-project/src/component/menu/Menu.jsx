import React from "react";
//COMPOTENT
import StyleSelector from "./StyleSelector";
import BackgroundSections from "./BackgroundSections";
import OptionsSections from "./OptionsSections";

//STYLES
import { TitleStyled, MenuContentStyled, InputTextStyled } from "./menu.styled";

//REDUX
import { connect } from "react-redux";
import { changeTitle } from "../../actions/actions";

function Menu(props) {
  return (
    <>
      <MenuContentStyled>
        <TitleStyled>Title</TitleStyled>
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
});

const mapDispatchToProps = {
  changeTitleProp: changeTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
