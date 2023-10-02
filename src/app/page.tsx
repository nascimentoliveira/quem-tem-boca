'use client';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

import { UserProvider } from '@/app/contexts/userContext';
import MobileView from './components/Home/MobileView';
import DesktopView from './components/Home/DesktopView';
import { ThemeWrapper } from './themes/theme';

export type Form = 'login' | 'join' | 'recovery';

const Home = () => {
  const theme = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<Form>('login');

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

  return (
    <ThemeWrapper>
      <UserProvider>
        {isSmallScreen ? (
          <MobileView currentForm={currentForm} setCurrentForm={setCurrentForm} />
        ) : (
          <DesktopView currentForm={currentForm} setCurrentForm={setCurrentForm} />
        )}
      </UserProvider>
    </ThemeWrapper>
  );
};

export default Home;
