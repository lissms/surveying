import styled from "styled-components";

export const LandingContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
export const HeaderStyled = styled.header`
  width: 100%;
  height: 10vh;
  background: linear-gradient(180deg, #7aae5a 0%, #adc759 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SurveyCardStyled = styled.div`
  width: 87%;
  height: 280px;
  padding: 15px 20px;
  border: 2px solid #313468;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => `${props.background}`};
`;
