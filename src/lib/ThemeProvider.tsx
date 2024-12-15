import React from "react";
import { theme } from "./theme";

export const ThemeContext = React.createContext(theme);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
