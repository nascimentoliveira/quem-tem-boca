'use client';
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from 'react';
import { Theme } from '@mui/material';

type ScreenSizeContextType = {
  isSmallScreen: boolean;
  setIsSmallScreen: Dispatch<SetStateAction<boolean>>;
};

const initialContext: ScreenSizeContextType = {
  isSmallScreen: false,
  setIsSmallScreen: () => {},
};

export const ScreenSizeContext = createContext<ScreenSizeContextType>(initialContext);

export function ScreenSizeProvider({ children, theme }: { children: ReactNode; theme: Theme }) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

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
    <ScreenSizeContext.Provider value={{ isSmallScreen, setIsSmallScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

export default useScreenSize;
