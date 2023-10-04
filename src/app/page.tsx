'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { UserContext } from '@/contexts/userContext';
import api from '../utils/api';
import LoadingBackDrop from '../components/LoadingBackdrop';

const Home = () => {
  const router = useRouter();
  const { accessToken } = useContext(UserContext);

  const checkApiConnection = async () => {
    api.get('/health');
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
