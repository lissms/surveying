//CHANGE TITLE
export const changeTitle = (newTitle) => {
  return {
    type: "CHANGE_TITLE",
    payload: newTitle,
  };
};
/* export const changeOptionText = (newOptions) => {
  return {
    type: "CHANGE_OPTION_TEXT",
    payload: newOptions,
  };
}; */
export const changeSizeAction = (newFontSize) => {
  return {
    type: "CHANGE_FONT_SIZE",
    payload: newFontSize,
  };
};
export const changeTextAjustement = (newTextAjustement) => {
  console.log(`newTextAjustement`, newTextAjustement);
  return {
    type: "CHANGE_TEXT_AJUSTEMENT",
    payload: newTextAjustement,
  };
};
export const openCloseTextColorModal = (openPalette) => {
  return {
    type: "OPEN_COLOR_MODAL",
    payload: openPalette,
  };
};
export const openCloseBackgroundColorModal = (openPalette) => {
  return {
    type: "OPEN_BACKGROUND_MODAL",
    payload: openPalette,
  };
};
export const openCloseMenu = (openMenu) => {
  return {
    type: "OPEN_MENU",
    payload: openMenu,
  };
};
export const chageTextColor = (newTextColor) => {
  return {
    type: "CHANGE_TEXT_COLOR",
    payload: newTextColor,
  };
};
export const chageBackgroundColor = (newBackground) => {
  return {
    type: "CHANGE_BACKGROUND_COLOR",
    payload: newBackground,
  };
};

export const toggleOpenOptionPanel = (optionId) => ({
  type: "TOGGLE_OPEN_OPTION_PANEL",
  payload: optionId,
});
export const addNewOption = () => ({
  type: "ADD_NEW_OPTION",
});
export const removeOption = (removeOption) => ({
  type: "REMOVE_OPTION",
  payload: removeOption,
});
export const selectedEmoticon = (optionId, selectedEmoticon) => ({
  type: "SELECTED_EMOTICON",
  payload: {
    optionId,
    selectedEmoticon,
  },
});
export const changeOptionText = (optionId, optionText) => ({
  type: "CHANGE_OPTION_TEXT",
  payload: {
    optionId,
    optionText,
  },
});
export const changeOptionColor = (optionColor, optionId) => ({
  type: "CHANGE_OPTION_COLOR",
  payload: {
    optionId,
    optionColor,
  },
});
