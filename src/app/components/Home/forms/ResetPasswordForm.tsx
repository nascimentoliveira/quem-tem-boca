import { Send } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";

import styles from "@/app/page.module.css";

const ResetPasswordForm = () => {
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
        className={styles.buttonForm}
      >
        Recuperar senha
      </Button>
    </Stack>
  );
};

export default ResetPasswordForm;