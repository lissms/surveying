import styled from "styled-components";

export const Option = styled.div`
  width: 243px;
  height: 37px;
  background: #c1db6c;
  border-radius: ${(props) => (props.hasFlag ? `4px 4px 0 0px;;` : ` 4px `)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 17px;
  margin-bottom: 10px;
`;
export const ButtonOptions = styled.div`
  margin-right: 17px;
  display: flex;
  width: 27px;
  border-radius: 100px;
  transform: rotate(180deg);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & .arrow {
    width: 10px;
    height: 3px;
    background: #313468;
    transform-origin: left;
    transform: ${(props) => (props.hasFlag ? `rotate(45deg) translateY(-5px);` : `rotate(-45deg) translateY(5px);`)};
    transition: transform ease 0.5s;
  }
  & .arrow-bottom {
    width: 10px;
    height: 3px;
    background: #313468;
    transform-origin: right;
    transform: ${(props) => (props.hasFlag ? `rotate(-45deg) translateY(-5px);` : `rotate(45deg) translateY(5px);`)};
    transition: transform ease 0.5s;
  }
`;
