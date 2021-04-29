import React, { useState } from "react";
//STYLES
import { ListStyles } from "./ChooseEmoticon.styled";
//IMAGES
import heart from "../../images/heart.png";
import applause from "../../images/applause.png";
import okHand from "../../images/ok-hand.png";
import light from "../../images/ligth.png";
import face from "../../images/face.png";

//REDUX
import { connect } from "react-redux";
import { selectedEmoticon } from "../../actions/actions";

function ChooseEmoticon(props) {
  const emoticonList = [
    {
      id: Math.random(),
      name: "heart",
      img: heart,
    },
    {
      id: Math.random(),
      name: "applause",
      img: applause,
    },
    {
      id: Math.random(),
      name: "okHand",
      img: okHand,
    },
    {
      id: Math.random(),
      name: "light",
      img: light,
    },
    {
      id: Math.random(),
      name: "face",
      img: face,
    },
  ];

  // debería recibir una props "selectedEmoticon" con uno de los tipo de emoticon,
  // par que aparezca seleccionado

  // debería recibir una props con un callback, donde se le pase que emoticon fue seleccionado
  return (
    <div>
      <ListStyles>
        {emoticonList.map((emoticon) => {
          return (
            <li
              className="emoticon"
              id={emoticon.id}
              key={emoticon.id}
              onClick={() => props.selectedEmoticon(props.optionsId, emoticon.name)}
            >
              <img src={emoticon.img} alt={emoticon.name} />
            </li>
          );
        })}
      </ListStyles>
    </div>
  );
}

const mapDispatchToProps = {
  selectedEmoticon,
};

export default connect(null, mapDispatchToProps)(ChooseEmoticon);
