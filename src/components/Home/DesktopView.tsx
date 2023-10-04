import { ReactNode } from 'react';

import StyledMainBox from '@/components/StyledMain';
import FormContainer from '@/components/Home/forms/FormContainer';
import HomeHeader from '@/components/HomeHeader';
import Logo from '../Logo';

interface DesktopViewProps {
  button: ReactNode;
  form: ReactNode;
}

const DesktopView = ({ button, form }: DesktopViewProps) => {
  return (
    <StyledMainBox className="desktop">
      <HomeHeader>
        <Logo height="min-content" width="35%" minWidth={140} />
        {button}
      </HomeHeader>
      <FormContainer>{form}</FormContainer>
    </StyledMainBox>
  );
};

export default DesktopView;
