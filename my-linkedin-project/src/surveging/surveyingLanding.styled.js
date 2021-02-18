import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.header`
  width: 100%;
  height: 82px;
  background: linear-gradient(180deg, #7aae5a 0%, #adc759 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
    content: "L";
    position: absolute;
    right: 20px;
    top: 10px1;
  }
  & h1 {
    color: #ffffff;
    font-family: Orbitron;
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

export const SurveyContainer = styled.div`
  width: 87%;
  height: 280px;
  padding: 15px 20px;
  border: 2px solid #313468;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
