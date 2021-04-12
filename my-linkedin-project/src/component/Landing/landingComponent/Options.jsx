import React from "react";

//STYLES
import { TextOptionStyles, OptionStyles } from "./Options.Styled";

//REDUX
import { connect } from "react-redux";

//UTILITIES
import getImageByName from "../../../utilities/getImageByName";

function Options(props) {
  return props.options.map((option, index) => (
    <OptionStyles>
      <img src={getImageByName(option.image)} alt="heart" />
      <TextOptionStyles>{option.text}</TextOptionStyles>
    </OptionStyles>
  ));
}
const mapStateToProps = (state) => ({
  options: state.options,
});

export default connect(mapStateToProps, null)(Options);
