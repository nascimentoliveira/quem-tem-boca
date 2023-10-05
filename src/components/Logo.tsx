import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

const Logo = (props: BoxProps) => {
  const StyledLogoBox = styled(Box)(() => ({
    /*     height: 'min-content', */
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    '& img': {
      width: 'auto',
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '100%',
    },
  }));

  return (
    <StyledLogoBox {...props}>
      <Image src="/logo.png" alt="Logo" width={1286} height={776} priority={true} />
    </StyledLogoBox>
  );
};

export default Logo;
