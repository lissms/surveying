import React from "react";
import SurveyingTitle from "./SurveyingTitle";
import { Header, LandingContainer, SurveyContainer } from "./surveyingLanding.styled";
import Options from "./Options";

function SurveyingLanding() {
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
    <LandingContainer>
      <Header>
        <h1>Surveying</h1>
      </Header>
      <SurveyContainer>
        <SurveyingTitle title="hola"></SurveyingTitle>
        <Options options={options}></Options>
      </SurveyContainer>
    </LandingContainer>
  );
}

export default SurveyingLanding;
