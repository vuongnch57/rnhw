import React, {createContext, useContext, useState} from 'react';
import {Theme, ThemeContextType, ThemeColors} from '../types/theme';

const lightTheme: ThemeColors = {
  textColor: '#000',
  backgroundColor: '#FFF',
};

const darkTheme: ThemeColors = {
  textColor: '#FFF',
  backgroundColor: '#000',
};

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: 'light',
  changeTheme: () => {},
  colors: lightTheme,
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [themeMode, setThemeMode] = useState<Theme>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme: themeMode,
        changeTheme: setThemeMode,
        colors: themeMode === 'light' ? lightTheme : darkTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
