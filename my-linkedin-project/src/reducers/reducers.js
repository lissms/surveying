const initialState = {
  title: "",
  fontSize: "10px",
  textAjustement: "center",
  isOpenTextModal: true,
  isOpenBackgroundModal: true,
  isOpenMenu: true,
  textColor: "",
  background: "",
  //________________________
  options: [
    {
      id: Math.random(),
      text: "redux",
      image: "heart",
      texColor: "red",
      fontSize: "10px",
      textAjustement: "center",
      isOpen: true,
    },
  ],
};

// Descripción de como se cambiara el estado global
// configuración
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    /*  case "CHANGE_OPTION_TEXT":
      return { ...state, option: action.payload }; */
    case "CHANGE_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    case "CHANGE_TEXT_AJUSTEMENT":
      return { ...state, textAjustement: action.payload };
    case "OPEN_COLOR_MODAL":
      return { ...state, isOpenTextModal: action.payload };
    case "OPEN_BACKGROUND_MODAL":
      return { ...state, isOpenBackgroundModal: action.payload };
    case "OPEN_MENU":
      return { ...state, isOpenMenu: action.payload };
    case "CHANGE_TEXT_COLOR":
      return { ...state, textColor: action.payload };
    case "CHANGE_BACKGROUND_COLOR":
      return { ...state, background: action.payload };
    case "ADD_NEW_OPTION":
      return {
        ...state,
        options: [
          ...state.options,
          {
            id: Math.random(),
            text: "",
            image: "",
            texColor: "",
            fontSize: "",
            textAjustement: "",
            isOpen: false,
          },
        ],
      };
    case "REMOVE_OPTION":
      return {
        ...state,
        options: state.options.filter((option) => option.id !== action.payload),
      };
    //___________________-
    case "SELECTED_EMOTICON":
      return {
        ...state,
        options: state.options.map((option) => {
          if (option.id === action.payload.optionId) {
            return {
              ...option,
              image: action.payload.selectedEmoticon,
            };
          } else {
            return option;
          }
        }),
      };
    case "CHANGE_OPTION_TEXT":
      return {
        ...state,
        options: state.options.map((option) => {
          if (option.id === action.payload.optionId) {
            return {
              ...option,
              text: action.payload.optionText,
            };
          } else {
            return option;
          }
        }),
      };
    case "CHANGE_OPTION_COLOR":
      return {
        ...state,
        options: state.options.map((option) => {
          if (option.id === action.payload.optionId) {
            return {
              ...option,
              texColor: action.payload.optionColor,
            };
          } else {
            return option;
          }
        }),
      };

    //_______________________
    case "TOGGLE_OPEN_OPTION_PANEL":
      return {
        ...state,
        options: state.options.map((option) => {
          if (option.id === action.payload) {
            return {
              ...option,
              isOpen: !option.isOpen,
            };
          } else {
            return option;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
