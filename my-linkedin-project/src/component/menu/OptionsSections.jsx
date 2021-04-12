import React, { useState } from "react";
import { Option, ButtonOptions } from "./OptionsSections.styled";
import OptionChooseStyles from "./OptionChooseStyles";

// REDUX
import { connect } from "react-redux";

//actions
import { toggleOpenOptionPanel } from "../../actions/actions";

function OptionsSections(props) {
  return (
    <div>
      {props.options.map((option, index) => {
        return (
          <div>
            <Option id={option.id} onClick={() => props.toggleOpenOptionPanel(option.id)}>
              <p>{`Option ${index + 1}`}</p>
              <ButtonOptions hasFlag={option.isOpen}>
                <div className="arrow"></div>
                <div className="arrow-bottom"></div>
              </ButtonOptions>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSections);
