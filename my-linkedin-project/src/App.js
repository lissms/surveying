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
const reduxChromeExtensionSettings = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, reduxChromeExtensionSettings);

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
