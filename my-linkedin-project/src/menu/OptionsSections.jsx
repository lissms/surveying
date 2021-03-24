import React, { useState } from "react";
import { Option, ButtonOptions } from "./OptionsSections.styled";
import OptionChooseStyles from "./OptionChooseStyles";

function OptionsSections(props) {
  const [hasFlag, setHasFlag] = useState(false);

  const handlerOpenOptions = () => {
    setHasFlag(hasFlag ? false : true);
  };

  return (
    <div>
      <Option borderRadius="4px" onClick={handlerOpenOptions}>
        <p>Options 1</p>
        <ButtonOptions hasFlag={hasFlag}>
          <div className="arrow"></div>
          <div className="arrow-bottom"></div>
        </ButtonOptions>
      </Option>
      <OptionChooseStyles></OptionChooseStyles>
    </div>
  );
}

export default OptionsSections;
