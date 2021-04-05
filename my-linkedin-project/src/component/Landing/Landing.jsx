import React from "react";
// STYLES
import { HeaderStyled, LandingContainerStyled, SurveyCardStyled } from "./Landing.Styled";
// IMAGES
import logo from "../../images/logo.png";
//COMPONENTS
import Title from "./landingComponent/Title";
import Options from "./landingComponent/Options";
import Footer from "../footer/Footer";

function Landing(props) {
  return (
    <LandingContainerStyled>
      <HeaderStyled>
        <img src={logo} alt="logo surveying" />
      </HeaderStyled>
      <SurveyCardStyled>
        <Title></Title>
        <Options></Options>
      </SurveyCardStyled>
      <Footer />
    </LandingContainerStyled>
  );
}

export default Landing;
