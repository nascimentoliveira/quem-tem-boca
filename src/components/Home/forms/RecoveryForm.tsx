import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Send } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { CircularProgress, Stack } from '@mui/material';

import { FormRecovery, RecoveryBody } from '@/types/Recovery';
import api from '@/utils/api';
import StyledTextField from './StyledTextField';
import StyledSendButton from './StyledSendButton';

const RecoveryForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
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

  function formatRequestBody(data: FormRecovery): RecoveryBody {
    return {
      email: data.email.toLowerCase(),
    };
  }

  const onSubmit = async (data: FormRecovery) => {
    try {
      setLoading(true);
      const body = formatRequestBody(data);
      const response = await api.post('/auth/recovery', body);
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Vamos resolver isso!',
        text: response.data.message,
      });
      router.push('/login');
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data.message,
        footer: `<p>Por que tenho esse problema? <br />
          Não foi possível seguir com o procedimento de recuparação.</p>`,
      });
      console.error('Error registering user:', error);
      setLoading(false);
    }
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
