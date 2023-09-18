import { Dispatch, SetStateAction, useState } from "react";
import { Visibility, VisibilityOff, Send } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Switch,
  TextField,
} from "@mui/material";

import { Form } from "@/app/page";
import styles from "@/app/page.module.css";

interface LoginFormProps {
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const LoginForm = ({ setCurrentForm }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [keepLogged, setKeepLogged] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  function handleClick() {
    setLoading(true);
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const handleKeepLogged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeepLogged(event.target.checked);
  };

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
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              color="secondary"
              checked={keepLogged}
              onChange={() => setKeepLogged(!keepLogged)}
            />
          }
          label="Lembre de mim"
        />
      </FormGroup>
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
        Entrar
      </Button>
      <Button
        variant="text"
        sx={{
          fontFamily: "Quicksand, Arial, sans-serif",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          justifyContent: "start",
          width: "max-content",
          textTransform: "none",
        }}
        onClick={() => setCurrentForm("reset-password")}
      >
        Esqueci minha senha
      </Button>
    </Stack>
  );
};

export default LoginForm;
