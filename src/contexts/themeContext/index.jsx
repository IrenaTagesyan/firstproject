import { createContext, useContext, useReducer } from 'react';
import { ThemeReducer, themeInitialState } from './themeReducer';
import { DARK_THEME_ACTIVE,DARK_THEME_NOT_ACTIVE } from './actionTypes';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, themeInitialState);

  const darkThemeOn = () => {
    dispatch({ type: DARK_THEME_ACTIVE });
  };

  const darkThemeOff = () => {
    dispatch({ type: DARK_THEME_NOT_ACTIVE });
  };

  const data = {
    state,
    darkThemeOn,
    darkThemeOff,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const { state, darkThemeOn, darkThemeOff } = useContext(ThemeContext);
  return { state, darkThemeOn, darkThemeOff };
};
