'use client';
import { useSearchParams } from 'next/navigation';

import { ThemeWrapper } from '@/themes/theme';
import { UserProvider } from '@/contexts/userContext';
import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import LoginForm from '@/components/Home/forms/LoginForm';

const Login = () => {
  const isFirstHalf = useSearchParams().get('origin') === 'home';

  const button = (
    <ChangeFormButton title="Não tem conta?" subtitle="Cadastre-se" destination="/join" />
  );

  const form = <LoginForm />;

  return (
    <ThemeWrapper>
      <UserProvider>
        <DesktopView button={button} form={form} />
        <MobileView button={button} form={form} isFirstHalf={isFirstHalf} />
      </UserProvider>
    </ThemeWrapper>
  );
};

export default Login;