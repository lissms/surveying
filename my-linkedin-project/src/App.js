import React from "react";

//COMPONENTS
import Landing from "./component/Landing/Landing.jsx";
import Menu from "./component/menu/Menu";

//REDUX
import { createStore } from "redux";
/* import composeWithDevtools from "redux-devtools"; */
import { Provider } from "react-redux";

//Component associated with redux
import reducer from "./reducers/reducers";

//creating my store
const store = createStore(reducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Landing />
        <Menu></Menu>
      </Provider>
    </div>
  );
}

export default App;
