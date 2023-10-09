'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import api from '../utils/api';
import LoadingBackDrop from '../components/LoadingBackdrop';
import useUser from '@/hooks/useUser';

const Home = () => {
  const router = useRouter();
  const { accessToken } = useUser();

  const checkApiConnection = async () => {
    try {
      await api.get('/health');
    } catch (error) {
      throw new Error('Erro ao verificar a conexão com a API');
    }
  };

  useEffect(() => {
    const handleApiConnectionError = () => {
      console.error('Erro ao verificar a conexão com a API');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifique a sua conexão ou tente novamente mais tarde.',
        footer: `<p>Por que tenho esse problema? <br />
        Não foi possível estabelecer conexão com o servidor.</p>`,
        confirmButtonText: 'Tentar novamente',
      }).then(() => {
        window.location.reload();
      });
    };

    const fetchData = async () => {
      try {
        await checkApiConnection();
        if (accessToken) {
          router.push('/establishments');
        } else {
          router.push('/login?origin=home');
        }
      } catch (error) {
        handleApiConnectionError();
      }
    };

    fetchData();
  }, [accessToken, router]);

  return <LoadingBackDrop />;
};

export default Home;
