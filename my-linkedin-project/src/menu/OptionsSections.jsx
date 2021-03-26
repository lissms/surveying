import React, { useState } from "react";
import { Option, ButtonOptions } from "./OptionsSections.styled";
import OptionChooseStyles from "./OptionChooseStyles";

function OptionsSections(props) {
  const options = [
    {
      Option: "Option 1",
      id: "1",
    },
    {
      Option: "Option 2 ",
      id: "2",
    },
    {
      Option: "Option 3",
      id: "3",
    },
    {
      Option: "Option 4",
      id: "4",
    },
    {
      Option: "Option 5",
      id: "5",
    },
  ];

  const [hasFlag, setHasFlag] = useState(false);

  const handlerOpenOptions = () => {
    setHasFlag(hasFlag ? false : true);
  };

  return (
    <div>
      {options.map((option) => {
        return (
          <div>
            <Option id={option.id} onClick={handlerOpenOptions}>
              <p>{option.Option}</p>
              <ButtonOptions hasFlag={hasFlag}>
                <div className="arrow"></div>
                <div className="arrow-bottom"></div>
              </ButtonOptions>
            </Option>
            <OptionChooseStyles hasFlag={hasFlag}></OptionChooseStyles>
          </div>
        );
      })}
    </div>
  );
}

export default OptionsSections;
