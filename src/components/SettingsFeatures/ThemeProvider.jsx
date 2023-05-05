import { useState, createContext } from 'react';

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return <div className={isLight ? null : 'dark-theme'} onClick={toggleTheme}>{children}</div>;
};
export const ThemeContext = createContext({
    isLight: false,
    toggleTheme: () => {},
  });
export default ThemeProvider;
