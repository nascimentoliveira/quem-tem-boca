'use client';
import { ThemeWrapper } from '@/themes/theme';
import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import RecoveryForm from '@/components/Home/forms/RecoveryForm';

const Recovery = () => {
  const button = (
    <ChangeFormButton title="Não tem conta?" subtitle="Cadastre-se" destination="/join" />
  );

  const form = <RecoveryForm />;

  return (
    <ThemeWrapper>
      <DesktopView button={button} form={form} />
      <MobileView button={button} form={form} isFirstHalf={false} />
    </ThemeWrapper>
  );
};

export default Recovery;
