import { Dispatch, SetStateAction } from "react";
import { Box } from "@mui/material";

import { Form } from "@/app/page";
import styles from "@/app/page.module.css";
import Logo from "./Logo";
import ChangeFormButton from "./ChangeFormButton";
import Forms from "./forms/Forms";

interface DesktopViewProps {
  currentForm: Form;
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const DesktopView = ({ currentForm, setCurrentForm }: DesktopViewProps) => {
  return (
    <main className={styles.main}>
      <Box className={styles.header}>
        <Logo />
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
  );
};

export default DesktopView;
