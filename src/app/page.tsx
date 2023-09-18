"use client";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

import { UserProvider } from "@/app/contexts/userContext";
import MobileView from "./components/Home/MobileView";
import DesktopView from "./components/Home/DesktopView";

export type Form = "login" | "join" | "reset-password";

function Home() {
  const theme = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<Form>("login");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= theme.breakpoints.values.md);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints]);

  const themeStyle = createTheme({
    typography: {
      fontFamily: "Quicksand, Arial, sans-serif",
      h1: {
        fontWeight: "600",
      },
    },
    palette: {
      primary: {
        main: "#535353",
      },
      secondary: {
        main: "#f8335e",
      },
    },
  });

  return (
    <ThemeProvider theme={themeStyle}>
      <UserProvider>
        {isSmallScreen ?
          <MobileView
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
          :
          <DesktopView
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        }
      </UserProvider>
    </ThemeProvider>
  );
};

export default Home;
