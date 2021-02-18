import React from "react";
import { Title } from "./surveyinTitle.styled";
import PropTypes from "prop-types";

function SurveyingTitle(props) {
  return (
    <Title color="red" textAjustement="center" fontSize="12px">
      {props.title}
    </Title>
  );
}

SurveyingTitle.propTypes = {};

export default SurveyingTitle;
