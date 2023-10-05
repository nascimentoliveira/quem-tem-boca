'use client';
import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif',
    h1: {
      fontWeight: '600',
    },
  },
  palette: {
    primary: {
      main: '#f2f2f2',
      light: '#f2f2f2',
      dark: '#4b4b4b',
      contrastText: '#757575',
    },
    secondary: {
      main: '#da2b54',
      light: '#ff6a74',
      dark: '#cc0c52',
      contrastText: '#ffffff',
    },
  },
});

export default theme;

export function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
