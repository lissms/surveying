import applause from "../images/applause.png";
import heart from "../images/heart.png";
import face from "../images/face.png";
import okHand from "../images/ok-hand.png";
import ligth from "../images/ligth.png";

const imageSettings = {
  applause,
  heart,
  face,
  okHand,
  ligth,
};

const getImageByName = (imageName) => imageSettings[imageName] || okHand;

export default getImageByName;
