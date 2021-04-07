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
