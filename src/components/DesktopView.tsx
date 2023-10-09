import { ReactNode } from 'react';

import StyledMainBox from '@/components/StyledMain';
import FormContainer from '@/components/forms/FormContainer';
import HomeHeader from '@/components/HomeHeader';
import Logo from './Logo';

interface DesktopViewProps {
  button: ReactNode;
  form: ReactNode;
}

const DesktopView = ({ button, form }: DesktopViewProps) => {
  return (
    <StyledMainBox className="desktop">
      <HomeHeader>
        <Logo height="min-content" width="50%" maxWidth={450} />
        {button}
      </HomeHeader>
      <FormContainer>{form}</FormContainer>
    </StyledMainBox>
  );
};

export default DesktopView;
