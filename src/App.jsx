import { Button } from './components/button';
import { ThemeContextProvider } from './contexts/themeContext';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Button buttonText="Sign in" variant="secondary" />
    </ThemeContextProvider>
  );
};
