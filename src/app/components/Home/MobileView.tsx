import { Dispatch, SetStateAction, useState } from "react";
import { Box, Fab } from "@mui/material";
import { EastRounded, KeyboardBackspaceRounded }from "@mui/icons-material";

import { Form } from "@/app/page";
import styles from "@/app/page.module.css";
import Logo from "./Logo";
import ChangeFormButton from "./ChangeFormButton";
import Forms from "./forms/Forms";

interface MobileViewProps {
  currentForm: Form;
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const MobileView = ({ currentForm, setCurrentForm }: MobileViewProps) => {
  const [showFirstHalf, setShowFirstHalf] = useState<boolean>(true);
  return (
    <>
      {showFirstHalf ? (
        <main className={`${styles.main} ${styles.first}`}>
          <Box className={styles.header}>
            <Logo />
          </Box>
          <Box className={styles.bottom}>
            <Fab
              className={styles.buttonHome}
              color="secondary"
              variant="extended"
              onClick={() => setShowFirstHalf(false)}
            >
              Começar
              <EastRounded sx={{ ml: 1 }} />
            </Fab>
          </Box>
        </main>
      ) : (
        <main className={`${styles.main} ${styles.second}`}>
          <Box className={styles.header}>
            <Fab
              className={styles.buttonHome}
              color="secondary"
              onClick={() => setShowFirstHalf(true)}
              variant="extended"
            >
              <KeyboardBackspaceRounded sx={{ mr: 1 }} />
              Voltar
            </Fab>
            <ChangeFormButton
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
            />
          </Box>
          <Forms
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        </main>
      )}
    </>
  );
};

export default MobileView;
