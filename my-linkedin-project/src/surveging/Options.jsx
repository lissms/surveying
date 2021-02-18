import React from "react";
import { TextOptions } from "./Options.styled";

function Options(props) {
  return (
    <div>
      {props.options.map((option) => (
        <TextOptions
          key={option.id}
          texColor={option.texColor}
          fontSize={option.fontSize}
          textAjustement={option.textAjustement}
        >
          {option.name}
        </TextOptions>
      ))}
    </div>
  );
}

export default Options;
