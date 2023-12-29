import styles from './button.module.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts/themeContext';

export const Button = ({ variant, buttonText, onClick }) => {
  const { state:{isDarkThemeActive} } = useThemeContext();
  return (
    <button
      className={classNames(
        styles.mainButton,
        styles[`btn_${variant}_${isDarkThemeActive ? 'dark' : 'light'}`],
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
