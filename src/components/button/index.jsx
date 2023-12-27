import styles from './button.module.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts/themeContext';

export const Button = ({ variant, buttonText, onClick }) => {
  const { state } = useThemeContext();
  return (
    <button
      className={classNames(
        styles.mainButton,
        styles[`btn_${variant}_${state.activeDarkTheme ? 'dark' : 'light'}`],
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
