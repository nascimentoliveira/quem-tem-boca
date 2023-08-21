'use client';
import { SetStateAction, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

import Logo from './components/Home/Logo';
import Join from './components/Home/Join';
import FirstHalf from './components/Home/FirstHalf';
import SecondHalf from './components/Home/SecondHalf';
import FormLogin from './components/Home/FormLogin';
import styles from './page.module.css'

function Home() {
  const theme = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState<SetStateAction<boolean>>(
    (window.innerWidth <= theme.breakpoints.values.md)
  );
  const [showSecondHalf, setShowSecondHalf] = useState<SetStateAction<boolean>>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= theme.breakpoints.values.md);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints]);

  const themeStyle = createTheme({
    typography: {
      fontFamily: 'Quicksand, Arial, sans-serif',
      h1: {
        fontWeight: '600',
      },
    },
    palette: {
      primary: {
        main: '#535353',
      },
      secondary: {
        main: '#f8335e',
      },
    },
  });

  const handleNext = () => {
    setShowSecondHalf(true);
  };

  const handleBack = () => {
    setShowSecondHalf(false);
  };

  const desktopView = (
    <ThemeProvider theme={themeStyle}>
      <main className={styles.main}>
        <Logo />
        <Box className={styles.sideForm}>
          <Join />
          <Typography variant='h3' sx={{marginTop: '40px'}}>
            Acesse seus<br />restaurantes<br />prediletos
          </Typography>
          <FormLogin />
        </Box>
      </main>
    </ThemeProvider >
  );

  const mobileView = (
    <ThemeProvider theme={themeStyle}>
      <main className={styles.main}>
        {!showSecondHalf ? (
          <FirstHalf onNext={handleNext} />
        ) : (
          <SecondHalf onBack={handleBack} />
        )}
      </main>
    </ThemeProvider>
  );

  return isSmallScreen ? mobileView : desktopView;
};

export default Home;
