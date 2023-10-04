import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import api from '@/utils/api';
import { FormJoin, JoinBody } from '@/types/Join';

const useJoin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  function formatRequestBody(data: FormJoin): JoinBody {
    return {
      email: data.email.toLowerCase(),
      username: data.username.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase()),
      password: data.password,
    };
  }

  const join = async (data: FormJoin) => {
    try {
      setLoading(true);
      const body = formatRequestBody(data);
      await api.post('/users', body);
      setLoading(false);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cadastrado com sucesso! Por favor faça login.',
        showConfirmButton: false,
        timer: 1200,
      });
      router.push('/login');
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data.message,
        footer: `<p>Por que tenho esse problema? <br />
        Não foi possivel cadastrar um novo usuário.</p>`,
      });
      console.error('Error registering user:', error);
      setLoading(false);
    }
  };

  return { join, loading };
};

export default useJoin;
