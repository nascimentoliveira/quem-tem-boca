'use client';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Visibility, VisibilityOff, Send } from '@mui/icons-material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import {
  Button,
  CircularProgress,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Switch,
  TextField,
  styled,
} from '@mui/material';

import { UserContext } from '@/app/contexts/userContext';
import { Form } from '@/app/page';
import styles from '@/app/page.module.css';
import api from '@/app/utils/api';
import theme from '@/app/themes/theme';

interface LoginFormProps {
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const LoginForm = ({ setCurrentForm }: LoginFormProps) => {
  type FormLogin = {
    email: string;
    password: string;
  };

  const [keepLogged, setKeepLogged] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const { accessToken, setAccessToken, setUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      router.push('/establishments');
    }
  }, [accessToken, router]);

  const onSubmit = async (data: FormLogin) => {
    try {
      setLoading(true);
      const body = {
        email: data.email.toLowerCase(),
        password: data.password,
      };
      const response = await api.post('/auth', body);
      setLoading(false);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Acesso permitido',
        showConfirmButton: false,
        timer: 1200,
      });
      if (keepLogged) {
        localStorage.setItem('Quem-tem-boca', JSON.stringify(response.data));
      }
      setAccessToken(response.data.token);
      delete response.data.token;
      setUser(response.data);
      router.push('/establishments');
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data.message,
        footer: `<p>Por que tenho esse problema? <br />
          Não foi possivel entrar.</p>`,
      });
      console.error('Error registering user:', error);
      setLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: theme.palette.primary.contrastText,
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Stack spacing={1} className={styles.form}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Campo e-mail é obrigatório',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Insira um endereço de e-mail válido.',
              },
            }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                type="email"
                label="e-mail"
                variant="filled"
                size="small"
                fullWidth
                disabled={loading}
                className={styles.input}
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: 'Campo senha é obrigatório',
            }}
            render={({ field }) => (
              <FormControl
                {...field}
                variant="filled"
                color="primary"
                size="small"
                fullWidth
                required
                disabled={loading}
                className={styles.input}
                error={!!errors.password}
                sx={{
                  '& label.Mui-focused': {
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                <InputLabel htmlFor="filled-password">senha</InputLabel>
                <FilledInput
                  id="filled-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
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
                {!!errors.password && (
                  <FormHelperText id="filled-password">
                    {`${errors.password.message}`}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
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
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disabled={loading}
            startIcon={loading ? <CircularProgress color="inherit" size={25} /> : <Send />}
            sx={{
              height: '48px',
              fontSize: '18px',
              textTransform: 'none',
              '&.Mui-disabled': {
                backgroundColor: '#ff5476',
              },
            }}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
          <Button
            variant="text"
            disabled={loading}
            sx={{
              fontFamily: 'Quicksand, Arial, sans-serif',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              justifyContent: 'start',
              width: 'max-content',
              textTransform: 'none',
            }}
            onClick={() => setCurrentForm('recovery')}
          >
            Esqueci minha senha
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
