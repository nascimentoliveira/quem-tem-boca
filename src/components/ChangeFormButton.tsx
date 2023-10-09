import { Box, Button, Typography, styled } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ChangeFormButtonProps {
  title: string;
  subtitle: string;
  destination: string;
}

const ChangeFormButton = ({ title, subtitle, destination }: ChangeFormButtonProps) => {
  const router = useRouter();

  const handleChangeForm = () => {
    router.push(destination);
  };

  const StyledButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '18px',
    height: 'max-content',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textTransform: 'none',
  }));

  return (
    <Box sx={{ zIndex: 2 }}>
      <StyledButton variant="text" onClick={handleChangeForm}>
        <Typography whiteSpace="nowrap">{title}</Typography>
        <Typography color="secondary" whiteSpace="nowrap">
          {subtitle}
        </Typography>
      </StyledButton>
    </Box>
  );
};

export default ChangeFormButton;
