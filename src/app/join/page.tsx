'use client';
import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import JoinForm from '@/components/Home/forms/JoinForm';
import StyledContainer from '@/components/Home/StyledContainer';
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
