import React from "react";
import SurveyingTitle from "./SurveyingTitle";
import { Header, LandingContainer, SurveyContainer } from "./surveyingLanding.styled";
import Options from "./Options";
import SurveyingFooter from "./SurveyingFooter";
import Menu from "../menu/Menu";
import { connect } from "react-redux";

function SurveyingLanding(props) {
  return (
    <>
      <LandingContainer>
        <Header>
          <h1>Surveying</h1>
        </Header>
        <SurveyContainer>
          <SurveyingTitle
            title={props.titleProp || "What is the best way to manage the state in React"}
          ></SurveyingTitle>
          <Options options={props.optionList}></Options>
        </SurveyContainer>
        <SurveyingFooter></SurveyingFooter>
      </LandingContainer>

      <Menu></Menu>
    </>
  );
}

const mapStateToProps = (state) => ({
  titleProp: state.title,
  optionList: state.options,
});

export default connect(mapStateToProps, null)(SurveyingLanding);
