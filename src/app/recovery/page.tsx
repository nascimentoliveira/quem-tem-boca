'use client';
import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import RecoveryForm from '@/components/Home/forms/RecoveryForm';
import StyledContainer from '@/components/Home/StyledContainer';

const Recovery = () => {
  const button = (
    <ChangeFormButton title="Não tem conta?" subtitle="Cadastre-se" destination="/join" />
  );

  const form = <RecoveryForm />;

  return (
    <StyledContainer>
      <DesktopView button={button} form={form} />
      <MobileView button={button} form={form} isFirstHalf={false} />
    </StyledContainer>
  );
};

export default Recovery;
