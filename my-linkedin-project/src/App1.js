import { createStore } from "redux";
import { Provider } from "react-redux";

import SurveyingLanding from "./surveging/SurveyingLanding";

const initialState = {
  title: "",
  options: [
    {
      name: "redux",
      image: "mano",
      texColor: "red",
      fontSize: "10px",
      textAjustement: "center",
      id: 1,
    },
  ],
};

// Descripción de como se cambiara el estado global
// configuración
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    case "CHANGE_OPTION_TEXT":
      return { ...state, option: action.payload };
    default:
      return state;
  }
};

const reduxChromeExtensionSettings = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, reduxChromeExtensionSettings);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SurveyingLanding />
      </Provider>
    </div>
  );
}

export default App;
