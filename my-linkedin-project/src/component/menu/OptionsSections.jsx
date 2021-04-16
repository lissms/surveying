import React from "react";
import { Option, ButtonOptions } from "./OptionsSections.styled";
import { TextButtonStyles } from "./menu.styled";
import OptionChooseStyles from "./OptionChooseStyles";
import Button from "../generalComponents/Buttons";

// REDUX
import { connect } from "react-redux";

//actions
import { toggleOpenOptionPanel, removeOption } from "../../actions/actions";

function OptionsSections(props) {
  return (
    <div>
      {props.options.map((option, index) => {
        return (
          <div>
            <Option id={option.id}>
              <p>{`Option ${index + 1}`}</p>
              <ButtonOptions hasFlag={option.isOpen} onClick={() => props.toggleOpenOptionPanel(option.id)}>
                <div className="arrow"></div>
                <div className="arrow-bottom"></div>
              </ButtonOptions>
              <Button
                background=" #313468"
                borderRd="2px"
                height="26px"
                width="26px"
                display="flex"
                justify="center"
                alignItm="center"
                cursor="pointer"
                onClick={() => {
                  props.removeOption(option.id);
                }}
              >
                <TextButtonStyles>-</TextButtonStyles>
              </Button>
            </Option>
            <OptionChooseStyles hasFlag={option.isOpen}></OptionChooseStyles>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  options: state.options,
});

const mapDispatchToProps = {
  toggleOpenOptionPanel,
  removeOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSections);
