import React from "react";
/* import { changeTitle } from "./actions/actions"; */
//COMPONENTS
import Landing from "./component/Landing/Landing.jsx";
import Menu from "./component/menu/Menu";
import Modal from "./component/modal/Modal";

function App() {
  return (
    <div>
      <Landing />
      <Menu></Menu>
      <Modal></Modal>
    </div>
  );
}

export default App;
