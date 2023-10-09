'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';
import ChangeFormButton from '@/components/ChangeFormButton';
import LoginForm from '@/components/forms/LoginForm';
import StyledContainer from '@/components/StyledContainer';
import useUser from '@/hooks/useUser';
import useScreenSize from '@/contexts/screenContext';

const Login = () => {
  const router = useRouter();
  const { accessToken } = useUser();
  const { isSmallScreen } = useScreenSize();

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
      {isSmallScreen ? (
        <MobileView button={button} form={form} isFirstHalf={isFirstHalf} />
      ) : (
        <DesktopView button={button} form={form} />
      )}
    </StyledContainer>
  );
};

export default Login;
