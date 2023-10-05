'use client';
import DesktopView from '@/components/Home/DesktopView';
import MobileView from '@/components/Home/MobileView';
import ChangeFormButton from '@/components/Home/ChangeFormButton';
import JoinForm from '@/components/Home/forms/JoinForm';
import StyledContainer from '@/components/Home/StyledContainer';

const Join = () => {
  const button = (
    <ChangeFormButton title="Já possui conta?" subtitle="Entre" destination="/login" />
  );

  const form = <JoinForm />;

  return (
    <StyledContainer>
      <DesktopView button={button} form={form} />
      <MobileView button={button} form={form} isFirstHalf={false} />
    </StyledContainer>
  );
};

export default Join;
