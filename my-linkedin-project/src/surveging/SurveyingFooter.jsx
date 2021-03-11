import React from "react";
import { Footer } from "./surveyingFooter.styled";
import ButtonSurveying from "./ButtonSurveying";

function SurveyingFooter(props) {
  return (
    <Footer>
      <ButtonSurveying />
      <ButtonSurveying />
      <ButtonSurveying />
    </Footer>
  );
}

export default SurveyingFooter;
