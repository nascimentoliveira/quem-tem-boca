import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff, Send } from '@mui/icons-material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
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
  styled,
} from '@mui/material';

import { UserContext } from '@/contexts/userContext';
import { FormLogin } from '@/types/Login';
import StyledTextField from './StyledTextField';
import StyledFormControl from './StyledFormControl';
import StyledSendButton from './StyledSendButton';
import theme from '@/themes/theme';
import useLogin from '@/hooks/useLogin';

const LoginForm = () => {
  const router = useRouter();
  const { accessToken } = useContext(UserContext);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, loading } = useLogin();
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

  const onSubmit = (data: FormLogin) => {
    login(data, rememberMe);
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

  const handleToggleRemembermeClick = () => {
    setRememberMe(!rememberMe);
  };

  const StyledRecoveryButton = styled(Button)({
    fontFamily: 'Quicksand, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'start',
    width: 'max-content',
    textTransform: 'none',
    '&.Mui-disabled': {
      color: theme.palette.primary.contrastText,
    },
  });

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
                  checked={rememberMe}
                  onChange={handleToggleRemembermeClick}
                />
              }
              label={
                <Typography color="white" variant="subtitle1">
                  Manter conectado
                </Typography>
              }
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
          <StyledRecoveryButton
            variant="text"
            color="primary"
            disabled={loading}
            onClick={handleChangeForm}
          >
            Esqueci minha senha
          </StyledRecoveryButton>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
