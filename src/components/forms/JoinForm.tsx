import { useState } from 'react';
import { Visibility, VisibilityOff, Send } from '@mui/icons-material';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import {
  CircularProgress,
  FilledInput,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
} from '@mui/material';

import { FormJoin } from '@/types/Join';
import StyledTextField from './StyledTextField';
import StyledFormControl from './StyledFormControl';
import StyledSendButton from './StyledSendButton';
import useJoin from '@/hooks/useJoin';

const JoinForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { join, loading } = useJoin();
  const methods = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = methods;
  const password = watch('password', '');

  const onSubmit = (data: FormJoin) => {
    join(data);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: 'Campo nome é obrigatório',
              minLength: {
                value: 3,
                message: 'Nome deve ter pelo menos 3 caracteres',
              },
            }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                type="text"
                label="nome"
                variant="filled"
                size="small"
                fullWidth
                disabled={loading}
                error={!!errors.username}
                helperText={errors.username ? `${errors.username.message}` : ''}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: 'Campo senha é obrigatório',
              pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  'A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.',
              },
            }}
            render={({ field }) => (
              <StyledFormControl
                {...field}
                variant="filled"
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
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: 'Campo repita a senha é obrigatório',
              validate: (value) => value === password || 'As senhas não coincidem',
            }}
            render={({ field }) => (
              <StyledTextField
                {...field}
                type="password"
                label="Repita a senha"
                variant="filled"
                size="small"
                fullWidth
                disabled={loading}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
              />
            )}
          />
          <StyledSendButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            disabled={loading}
            startIcon={loading ? <CircularProgress color="inherit" size={25} /> : <Send />}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </StyledSendButton>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default JoinForm;
