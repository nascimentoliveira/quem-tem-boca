import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import { FormLogin, LoginBody } from '@/types/Login';
import api from '@/utils/api';
import useUser from './useUser';

const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useUser();

  function formatRequestBody(data: FormLogin): LoginBody {
    return {
      email: data.email.toLowerCase(),
      password: data.password,
    };
  }

  const login = async (data: FormLogin, rememberMe: boolean) => {
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
      if (rememberMe) {
        localStorage.setItem('Quem-tem-boca', JSON.stringify(response.data));
      }
      signIn(response.data);
      router.push('/establishments');
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data.message,
        footer: `<p>Por que tenho esse problema? <br />
          Não foi possível entrar.</p>`,
      });
      console.error('Error authenticating user:', error);
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
