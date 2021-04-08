//CHANGE TITLE
export const changeTitle = (newTitle) => {
  return {
    type: "CHANGE_TITLE",
    payload: newTitle,
  };
};
export const changeOptionText = (newOptions) => {
  return {
    type: "CHANGE_OPTION_TEXT",
    payload: newOptions,
  };
};
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
export const openCloseColorPalette = (openPalette) => {
  return {
    type: "OPEN_COLOR_PALETTE",
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
