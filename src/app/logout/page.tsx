'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useUser from '@/hooks/useUser';
import LoadingBackDrop from '@/components/LoadingBackdrop';

const Logout = () => {
  const router = useRouter();
  const { signOut } = useUser();

  useEffect(() => {
    signOut();
    router.push('/login');
  }, [router, signOut]);

  return <LoadingBackDrop />;
};

export default Logout;
