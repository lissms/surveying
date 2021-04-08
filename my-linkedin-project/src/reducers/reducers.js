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
  //________________________
  fontSize: "10px",
  textAjustement: "center",
  isOpenModal: true,
  isOpenMenu: true,
  textColor: "blue",
  background: "#fff",
};

// Descripción de como se cambiara el estado global
// configuración
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    case "CHANGE_OPTION_TEXT":
      return { ...state, option: action.payload };
    case "CHANGE_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "CHANGE_TEXT_AJUSTEMENT":
      return { ...state, textAjustement: action.payload };
    case "OPEN_COLOR_PALETTE":
      return { ...state, isOpenModal: action.payload };
    case "OPEN_MENU":
      return { ...state, isOpenMenu: action.payload };
    case "CHANGE_TEXT_COLOR":
      return { ...state, textColor: action.payload };
    case "CHANGE_BACKGROUND_COLOR":
      return { ...state, background: action.payload };
    default:
      return state;
  }
};

export default reducer;
