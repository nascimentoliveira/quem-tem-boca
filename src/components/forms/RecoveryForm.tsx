import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Send } from '@mui/icons-material';
import { CircularProgress, Stack } from '@mui/material';

import { FormRecovery } from '@/types/Recovery';
import StyledTextField from './StyledTextField';
import StyledSendButton from './StyledSendButton';
import useRecovery from '@/hooks/useRecovery';

const RecoveryForm = () => {
  const { recovery, loading } = useRecovery();
  const methods = useForm({
    defaultValues: {
      email: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormRecovery) => {
    recovery(data);
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
                color="primary"
                size="small"
                fullWidth
                disabled={loading}
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
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
            {loading ? 'Enviando...' : 'Recuperar senha'}
          </StyledSendButton>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default RecoveryForm;
