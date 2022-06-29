export type Theme = 'light' | 'dark';
export type ThemeColors = {
  textColor: string;
  backgroundColor: string;
};
export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  colors: ThemeColors;
};
