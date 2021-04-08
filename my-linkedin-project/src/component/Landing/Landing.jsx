import React from "react";
// STYLES
import { HeaderStyled, LandingContainerStyled, SurveyCardStyled } from "./Landing.Styled";
// IMAGES
import logo from "../../images/logo.png";
//COMPONENTS
import Title from "./landingComponent/Title";
import Options from "./landingComponent/Options";
import Footer from "../footer/Footer";
// REDUX
import { connect } from "react-redux";

function Landing(props) {
  return (
    <LandingContainerStyled>
      <HeaderStyled>
        <img src={logo} alt="logo surveying" />
      </HeaderStyled>
      <SurveyCardStyled>
        <Title
          textColor={props.textColor}
          fontSize={props.fontSize}
          textAjustement={props.textAjustement}
          title={props.title || "What is the best way to manage the state in React ?"}
        ></Title>
        <Options></Options>
      </SurveyCardStyled>
      <Footer />
    </LandingContainerStyled>
  );
}
const mapStateToProps = (state) => ({
  title: state.title,
  fontSize: state.fontSize,
  textAjustement: state.textAjustement,
  textColor: state.textColor,
});
export default connect(mapStateToProps, null)(Landing);
