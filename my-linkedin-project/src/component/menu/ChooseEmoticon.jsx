import React from "react";
//STYLES
import { ListStyles } from "./ChooseEmoticon.styled";
//IMAGES
import heart from "../../images/linkedin-reacciones-1.png";
import applause from "../../images/linkedin-reacciones-3.png";
import okHand from "../../images/linkedin-reacciones 2.png";
import heartHand from "../../images/linkedin-reacciones 2.png";
import light from "../../images/linkedin-reacciones-4.png";
import curiosity from "../../images/linkedin-reacciones-5.png";

function ChooseEmoticon(props) {
  return (
    <div>
      <ListStyles>
        <li>
          {" "}
          <img src={heart} alt="heart" />
        </li>
        <li>
          {" "}
          <img src={applause} alt="applause" />
        </li>
        <li>
          {" "}
          <img src={okHand} alt="okHand" />
        </li>
        <li>
          {" "}
          <img src={heartHand} alt="heartHand" />
        </li>
        <li>
          {" "}
          <img src={light} alt="healightrt" />
        </li>
        <li>
          {" "}
          <img src={curiosity} alt="curiosity" />
        </li>
      </ListStyles>
    </div>
  );
}

export default ChooseEmoticon;
