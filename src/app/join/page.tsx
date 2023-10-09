'use client';
import DesktopView from '@/components/DesktopView';
import MobileView from '@/components/MobileView';
import ChangeFormButton from '@/components/ChangeFormButton';
import JoinForm from '@/components/forms/JoinForm';
import StyledContainer from '@/components/StyledContainer';
import useScreenSize from '@/contexts/screenContext';

const Join = () => {
  const { isSmallScreen } = useScreenSize();

  const button = (
    <ChangeFormButton title="Já possui conta?" subtitle="Entre" destination="/login" />
  );

  const form = <JoinForm />;

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

export default Join;
