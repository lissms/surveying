import styled from "styled-components";

export const TitleStyled = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #313468;
`;
export const MenuContentStyled = styled.div`
  height: 90vh;
  background-color: #fff;
  padding: 5%;
`;
export const InputTextStyled = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 5px;
  border: solid 2px #313468;
  padding: 2%;
  box-sizing: border-box;
  &::-webkit-input-placeholder {
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #959595;
  }
`;
export const LabelStyled = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 11px;
  color: #313468;
`;
export const ContentMiniComponetStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AdjustementStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const ContentStyleSelector = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid #e4e4e4;
`;
