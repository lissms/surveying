import React from "react";
import { connect } from "react-redux";
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
        <InputText
          type="text"
          name="Title"
          id="title"
          placeholder="Whire your survey title"
          value={props.titleProp}
          onChange={(event) => props.changeTitleProp(event.target.value)}
        />
        <StyleSelector></StyleSelector>

        <Title>Background</Title>
        <BackgroundSections></BackgroundSections>
        <Title>Options</Title>
        <OptionsSections></OptionsSections>
      </MenuContent>
    </>
  );
}

const mapStateToProps = (state) => ({
  titleProp: state.title,
});

const mapDispatchToProps = (dispatch) => ({
  changeTitleProp: function (newTitle) {
    const action = { type: "CHANGE_TITLE", payload: newTitle };
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
