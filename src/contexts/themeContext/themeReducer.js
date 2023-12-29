export const themeInitialState = {
  isDarkThemeActive: true,
};

export const ThemeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'IS_DARK_THEME_ACTIVE':
      return { ...state, isDarkThemeActive: true };

    case 'DARK_THEME_NOT_ACTIVE':
      return { ...state, isDarkThemeActive: false };
    default:
      return state;
  }
};
