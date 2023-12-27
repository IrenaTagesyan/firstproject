import { createContext, useContext, useReducer } from 'react';
import { ThemeReducer, themeActions, themeInitialState } from './themeReducer';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, themeInitialState);

  const darkThemeOn = () => {
    dispatch({ type: themeActions.DARK_ACTIVE, payload: true });
  };

  const darkThemeOff = () => {
    dispatch({ type: themeActions.DARK_ACTIVE, payload: false });
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
