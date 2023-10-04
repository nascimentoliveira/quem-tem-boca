import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff, Send } from '@mui/icons-material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {
  Button,
  CircularProgress,
  FilledInput,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Switch,
  Typography,
} from '@mui/material';

import { UserContext } from '@/contexts/userContext';
import { FormLogin, LoginBody } from '@/types/Login';
import api from '@/utils/api';
import StyledTextField from './StyledTextField';
import StyledFormControl from './StyledFormControl';
import StyledSendButton from './StyledSendButton';

const LoginForm = () => {
  const router = useRouter();
  const { accessToken, setAccessToken, setUser } = useContext(UserContext);
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

  useEffect(() => {
    if (accessToken) {
      router.push('/establishments');
    }
  }, [accessToken, router]);

  function formatRequestBody(data: FormLogin): LoginBody {
    return {
      email: data.email.toLowerCase(),
      password: data.password,
    };
  }

  const onSubmit = async (data: FormLogin) => {
    try {
      setLoading(true);
      const body = formatRequestBody(data);
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

  const handleChangeForm = () => {
    router.push('/recovery');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Stack spacing={1} width="100%">
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
              <StyledFormControl
                {...field}
                variant="filled"
                color="primary"
                size="small"
                fullWidth
                required
                disabled={loading}
                error={!!errors.password}
              >
                <InputLabel>senha</InputLabel>
                <FilledInput
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
                  <FormHelperText>{`${errors.password.message}`}</FormHelperText>
                )}
              </StyledFormControl>
            )}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={keepLogged}
                  onChange={() => setKeepLogged(!keepLogged)}
                />
              }
              label={<Typography>Lembre de mim</Typography>}
            />
          </FormGroup>
          <StyledSendButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disabled={loading}
            startIcon={loading ? <CircularProgress color="inherit" size={25} /> : <Send />}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </StyledSendButton>
          <Button
            variant="text"
            color="primary"
            disabled={loading}
            onClick={handleChangeForm}
            sx={{
              fontFamily: 'Quicksand, Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: 16,
              justifyContent: 'start',
              width: 'max-content',
              textTransform: 'none',
            }}
          >
            Esqueci minha senha
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
