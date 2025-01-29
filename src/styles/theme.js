import {ThemeProvider} from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

export const lightTheme = {
  colors: {
    primary: '#006BB8',
    secondary: '#FF6347',
    background: '#F0F0F0',
    text: '#333',
  },
};

export const darkTheme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#FF6347',
    background: '#333',
    text: '#F0F0F0',
  },
};

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

const Theme = ({ children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;