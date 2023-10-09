'use client';
import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import RecoveryForm from '@/components/Home/forms/RecoveryForm';
import StyledContainer from '@/components/Home/StyledContainer';
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
        <MobileView button={button} form={form} isFirstHalf={false} />
      ) : (
        <DesktopView button={button} form={form} />
      )}
    </StyledContainer>
  );
};

export default Recovery;
