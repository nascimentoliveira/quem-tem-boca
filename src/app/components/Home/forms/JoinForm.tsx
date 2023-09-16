import { useState } from "react";
import { Visibility, VisibilityOff, Send } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";

import styles from "@/app/page.module.css";

const JoinForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
      <TextField
        type="text"
        label="nome"
        variant="filled"
        color="primary"
        size="small"
        fullWidth
        required
        className={styles.input}
      />
      <FormControl
        variant="filled"
        color="primary"
        size="small"
        fullWidth
        required
        className={styles.input}
      >
        <InputLabel htmlFor="filled-adornment-password">
          senha
        </InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment
              position="end"
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        type="password"
        label="repita a senha"
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
        Cadastrar
      </Button>
    </Stack>
  );
};

export default JoinForm;
