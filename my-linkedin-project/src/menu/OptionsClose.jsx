import React, { useState } from "react";
import { Option, ButtonOptions } from "./OptionsClose.styled";

function OptionsClose(props) {
  const [hasFlag, setHasFlag] = useState(false);

  const handlerOpenOptions = () => {
    setHasFlag(hasFlag ? false : true);
  };

  return (
    <Option onClick={handlerOpenOptions}>
      <p>Options 1</p>
      <ButtonOptions hasFlag={hasFlag}>
        <div className="arrow"></div>
        <div className="arrow-bottom"></div>
      </ButtonOptions>
    </Option>
  );
}

export default OptionsClose;
