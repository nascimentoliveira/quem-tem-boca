'use client';
import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';
import ChangeFormButton from '@/components/ChangeFormButton';
import RecoveryForm from '@/components/forms/RecoveryForm';
import StyledContainer from '@/components/StyledContainer';
import useScreenSize from '@/contexts/screenContext';

const Recovery = () => {
  const { isSmallScreen } = useScreenSize();

  const button = (
    <ChangeFormButton title="Não tem conta?" subtitle="Cadastre-se" destination="/join" />
  );

  const form = <RecoveryForm />;

  return (
    <StyledContainer>
      {isSmallScreen ? (
        <MobileView button={button} form={form} />
      ) : (
        <DesktopView button={button} form={form} />
      )}
    </StyledContainer>
  );
};

export default Recovery;
