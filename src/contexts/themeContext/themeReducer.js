export const themeInitialState = {
activeDarkTheme: false,
};

export const themeActions = {
  DARK_ACTIVE: 'DARK_ACTIVE',
};

export const ThemeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'DARK_ACTIVE':
      return { ...state, isDark: payload };

    default:
      return state;
  }
};
