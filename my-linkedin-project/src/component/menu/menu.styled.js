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
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 75px;
  transform: ${(props) => (props.isOpen ? `translateX(150%)` : `translateX(0)`)};
  transition: transform ease 0.5s;

  & .menu {
    background-color: #eae4e4f7;
    padding: 16px;
  }
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
export const HeaderMenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CloseMenuStyled = styled.div`
  background-color: #ff000000;
  width: 108px;
  height: 90vh;
`;
export const TextButtonStyles = styled.div`
  color: #fff;
  font-size: 20px;
`;
export const HeaderObtionsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 255px;
  margin: 0;
`;
