import { Dispatch, SetStateAction, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Button, CircularProgress, Stack, TextField, styled } from '@mui/material';
import { Send } from '@mui/icons-material';
import Swal from 'sweetalert2';

import styles from '@/app/page.module.css';
import { Form } from '@/app/page';
import api from '@/app/utils/api';
import theme from '@/app/themes/theme';

interface RecoveryFormProps {
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const RecoveryForm = ({ setCurrentForm }: RecoveryFormProps) => {
  type FormRecovery = {
    email: string;
  };

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

  const onSubmit = async (data: FormRecovery) => {
    try {
      setLoading(true);
      const body = {
        email: data.email.toLowerCase(),
      };
      const response = await api.post('/auth/recovery', body);
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Vamos resolver isso!',
        text: response.data.message,
      });
      setCurrentForm('login');
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
                color="primary"
                size="small"
                fullWidth
                disabled={loading}
                className={styles.input}
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
              />
            )}
          />
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
            {loading ? 'Enviando...' : 'Recuperar senha'}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default RecoveryForm;
