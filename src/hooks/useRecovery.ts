import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import api from '@/utils/api';
import { FormRecovery, RecoveryBody } from '@/types/Recovery';

const useRecovery = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  function formatRequestBody(data: FormRecovery): RecoveryBody {
    return {
      email: data.email.toLowerCase(),
    };
  }

  const recovery = async (data: FormRecovery) => {
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
          Não foi possível seguir com o procedimento de recuperação.</p>`,
      });
      console.error('Error recovering password:', error);
      setLoading(false);
    }
  };

  return { recovery, loading };
};

export default useRecovery;
