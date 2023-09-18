import { Dispatch, SetStateAction, useState } from "react";
import { Visibility, VisibilityOff, Send } from "@mui/icons-material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import Swal from "sweetalert2";
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";

import styles from "@/app/page.module.css";
import api from "@/app/utils/api";
import { Form } from "@/app/page";

interface JoinFormProps {
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const JoinForm = ({ setCurrentForm }: JoinFormProps) => {

  type FormJoin = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { handleSubmit, control, formState: { errors }, watch } = methods;
  const password = watch("password", "");

  const onSubmit = async (data: FormJoin) => {
    try {
      setLoading(true);
      const body = {
        email: data.email,
        username: data.username,
        password: data.password,
      };
      const response = await api.post("/users", body);
      setLoading(false);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cadastrado com sucesso! Por favor faça login.',
        showConfirmButton: false,
        timer: 1200
      });
      setCurrentForm("login");
    } catch (error: any) {
      console.log(error.response?.data.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Não foi possivel cadastrar um novo usuário.",
        footer: `<p>Por que tenho esse problema? <br /> 
          ${error.response?.data.message}</p>`,
      });
      console.error("Error registering user:", error);
      setLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Stack
          spacing={1}
          className={styles.form}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo e-mail é obrigatório",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Insira um endereço de e-mail válido.",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                label="e-mail"
                variant="filled"
                color="primary"
                size="small"
                fullWidth
                disabled={loading}
                className={styles.input}
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ""}
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo nome é obrigatório",
              minLength: {
                value: 3,
                message: "Nome deve ter pelo menos 3 caracteres",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="nome"
                variant="filled"
                color="primary"
                size="small"
                fullWidth
                disabled={loading}
                className={styles.input}
                error={!!errors.username}
                helperText={errors.username ? `${errors.username.message}` : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo senha é obrigatório",
              pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: "A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.",
              },
            }}
            render={({ field }) => (
              < FormControl
                {...field}
                variant="filled"
                color="primary"
                size="small"
                fullWidth
                required
                disabled={loading}
                className={styles.input}
                error={!!errors.password}
              >
                <InputLabel htmlFor="filled-password">
                  senha
                </InputLabel>
                <FilledInput
                  id="filled-password"
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
                {!!errors.password &&
                  <FormHelperText id="filled-password">
                    {`${errors.password.message}`}
                  </FormHelperText>
                }
              </FormControl>
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "Campo repita a senha é obrigatório",
              validate: (value) => value === password || "As senhas não coincidem",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Repita a senha"
                variant="filled"
                color="primary"
                size="small"
                fullWidth
                disabled={loading}
                className={styles.input}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ""}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disabled={loading}
            startIcon={<Send />}
            sx={{
              height: "48px",
              fontSize: "18px",
              textTransform: "none",
            }}
          >
            Cadastrar
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default JoinForm;
