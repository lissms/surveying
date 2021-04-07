import React from "react";
import { LabelStyled, ContentMiniComponetStyled } from "./menu.styled";
import { SelectFontSizeStyled } from "./fontSize.styled";
//REDUX
import { connect } from "react-redux";
//actions
import { changeSizeAction } from "../../actions/actions";

function FontSize(props) {
  return (
    <ContentMiniComponetStyled>
      <LabelStyled>Font size</LabelStyled>
      <SelectFontSizeStyled name="fontSize" onClick={(event) => props.changeSize(event.target.value)}>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
      </SelectFontSizeStyled>
    </ContentMiniComponetStyled>
  );
}

const mapDispatchToProps = {
  changeSize: changeSizeAction,
};

export default connect(null, mapDispatchToProps)(FontSize);
