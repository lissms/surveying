import React from "react";
//COMPONENTS
import Button from "../generalComponents/Buttons";
//IMAGES
import share from "../../images/share-icon.png";
import download from "../../images/download-icon.png";
import edit from "../../images/edit-icon.png";
//STYLES
import { TextButtonStyles, FooterStyled } from "./Footer.Styled.js";
//REDUX
import { connect } from "react-redux";
//actions
import { openCloseMenu } from "../../actions/actions";

function Footer(props) {
  return (
    <FooterStyled>
      <Button
        background=" #313468"
        borderRd="2px"
        height="30px"
        width="82px"
        display="flex"
        justify="center"
        alignItm="center"
        cursor="pointer"
      >
        <img src={share} alt="share" />
        <TextButtonStyles>Share</TextButtonStyles>
      </Button>
      <Button
        background=" #313468"
        borderRd="2px"
        height="30px"
        width="82px"
        display="flex"
        justify="center"
        alignItm="center"
        cursor="pointer"
      >
        <img src={download} alt="download" />
        <TextButtonStyles>Download</TextButtonStyles>
      </Button>
      <Button
        cursor="pointer"
        isOpen={props.isOpen}
        background=" #313468"
        borderRd="2px"
        height="30px"
        width="82px"
        display="flex"
        justify="center"
        alignItm="center"
        onClick={() => props.openMenu(false)}
      >
        <img src={edit} alt="edit" />
        <TextButtonStyles>Edit</TextButtonStyles>
      </Button>
    </FooterStyled>
  );
}
const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = {
  openMenu: openCloseMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
