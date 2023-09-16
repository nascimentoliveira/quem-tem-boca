import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

import { Form } from "@/app/page";
import styles from "@/app/page.module.css";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import ResetPasswordForm from "./ResetPasswordForm";

interface FormsProps {
  currentForm: Form;
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const Forms = ({ currentForm, setCurrentForm }: FormsProps) => {
  return (
    <Stack
      spacing={2}
      className={styles.formContainer}
    >
      <Typography variant="h3">
        Acesse seus<br />restaurantes<br />prediletos
      </Typography>
      {currentForm === "login" && (
        <LoginForm
          setCurrentForm={setCurrentForm}
        />
      )}

      {currentForm === "join" && (
        <JoinForm />
      )}

      {currentForm === "reset-password" && (
        <ResetPasswordForm />
      )}
    </Stack>
  );
};

export default Forms;
