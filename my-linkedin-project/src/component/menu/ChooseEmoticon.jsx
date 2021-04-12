import React from "react";
//STYLES
import { ListStyles } from "./ChooseEmoticon.styled";
//IMAGES
import heart from "../../images/heart.png";
import applause from "../../images/applause.png";
import okHand from "../../images/ok-hand.png";
import light from "../../images/ligth.png";
import face from "../../images/face.png";

function ChooseEmoticon(props) {
  // esto debería ser un array

  // debería recibir una props "selectedEmoticon" con uno de los tipo de emoticon,
  // par que aparezca seleccionado

  // debería recibir una props con un callback, donde se le pase que emoticon fue seleccionado
  return (
    <div>
      <ListStyles>
        <li>
          <img src={heart} alt="heart" />
        </li>
        <li>
          <img src={applause} alt="applause" />
        </li>
        <li>
          <img src={okHand} alt="okHand" />
        </li>
        <li>
          <img src={light} alt="healightrt" />
        </li>
        <li>
          <img src={face} alt="curiosity" />
        </li>
      </ListStyles>
    </div>
  );
}

export default ChooseEmoticon;
