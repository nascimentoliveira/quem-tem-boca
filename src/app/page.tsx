'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import api from '../utils/api';
import LoadingBackDrop from '../components/LoadingBackdrop';
import useUser from '@/hooks/useUser';

const Home = () => {
  const router = useRouter();
  const { accessToken } = useUser();

  const checkApiConnection = async () => {
    try {
      await api.get('/health');
      console.log('Conexão com a API OK');
    } catch (error) {
      console.error('Erro ao verificar a conexão com a API');
    }
  };

  useEffect(() => {
    checkApiConnection();
    if (accessToken) {
      router.push('/establishments');
    } else {
      router.push('/login?origin=home');
    }
  }, [accessToken, router]);

  return <LoadingBackDrop />;
};

export default Home;
