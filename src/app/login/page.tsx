'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import LoginForm from '@/components/Home/forms/LoginForm';
import StyledContainer from '@/components/Home/StyledContainer';
import useUser from '@/hooks/useUser';

const Login = () => {
  const router = useRouter();
  const { accessToken } = useUser();

  useEffect(() => {
    if (accessToken) {
      router.push('/establishments');
    }
  }, [accessToken, router]);

  const isFirstHalf = useSearchParams().get('origin') === 'home';

  const button = (
    <ChangeFormButton title="Não tem conta?" subtitle="Cadastre-se" destination="/join" />
  );

  const form = <LoginForm />;

  return (
    <StyledContainer>
      <DesktopView button={button} form={form} />
      <MobileView button={button} form={form} isFirstHalf={isFirstHalf} />
    </StyledContainer>
  );
};

export default Login;
