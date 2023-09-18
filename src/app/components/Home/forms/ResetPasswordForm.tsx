import { Send } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";

import styles from "@/app/page.module.css";
import { Dispatch, SetStateAction } from "react";
import { Form } from "@/app/page";

interface ResetPasswordFormProps {
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const ResetPasswordForm = ({ setCurrentForm }: ResetPasswordFormProps) => {
  return (
    <Stack spacing={1} className={styles.form}>
      <TextField
        type="email"
        label="e-mail"
        variant="filled"
        color="primary"
        size="small"
        fullWidth
        required
        className={styles.input}
      />
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        startIcon={<Send />}
        sx={{
          height: "48px",
          fontSize: "18px",
          textTransform: "none",
        }}
      >
        Recuperar senha
      </Button>
    </Stack>
  );
};

export default ResetPasswordForm;
