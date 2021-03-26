import React from "react";
import SurveyingTitle from "./SurveyingTitle";
import { Header, LandingContainer, SurveyContainer } from "./surveyingLanding.styled";
import Options from "./Options";
import SurveyingFooter from "./SurveyingFooter";
import Menu from "../menu/Menu";
import { connect } from "react-redux";

function SurveyingLanding(props) {
  const options = [
    {
      name: "redux",
      image: "mano",
      texColor: "red",
      fontSize: "10px",
      textAjustement: "center",
      id: 1,
    },
    {
      name: "Recoil",
      image: "corazon",
      texColor: "blue",
      fontSize: "10px",
      textAjustement: "center",
      id: 1,
    },
    {
      name: "react Context API",
      image: "cara",
      texColor: "green",
      fontSize: "10px",
      textAjustement: "center",
      id: 1,
    },
  ];

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
          <Options options={options}></Options>
        </SurveyContainer>
        <SurveyingFooter></SurveyingFooter>
      </LandingContainer>

      <Menu></Menu>
    </>
  );
}

const mapStateToProps = (state) => ({
  titleProp: state.title,
});

export default connect(mapStateToProps, null)(SurveyingLanding);
