import { SetStateAction, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { 
  Button, 
  FilledInput, 
  FormControl, 
  IconButton, 
  InputAdornment, 
  InputLabel, 
  Stack, 
  TextField,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState<SetStateAction<boolean>>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inputStyles = {
    background: 'white',
    borderRadius: '4px',
  };

  const buttonStyles = {
    height: '48px',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: '18px',
    textTransform: 'none',
  };

  const buttonTextStyles = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Quicksand, sans-serif',
    textTransform: 'none',
    justifyContent: 'start',
    width: 'max-content',
  };

  return (
    <Stack 
      direction='column' 
      spacing={2} 
      sx={{ 
        width: '100%', 
        maxWidth: '450px',
        paddingTop: '20px',
      }}
    >
      <TextField
        type='email'
        label='e-mail'
        variant='filled'
        color='primary'
        size='small'
        fullWidth
        required
        InputProps={{
          style: inputStyles,
        }}
      />
      <FormControl
        variant='filled'
        color='primary'
        size='small'
        fullWidth
        required
        sx={inputStyles}
      >
        <InputLabel htmlFor='filled-adornment-password'>
          password
        </InputLabel>
        <FilledInput
          id='filled-adornment-password'
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment
              position='end'
            >
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        startIcon={<SendIcon />}
        sx={buttonStyles}
      >
        Entrar
      </Button>
      <Button variant='text' sx={buttonTextStyles}>
        Esqueci minha senha
      </Button>
    </Stack>
  );
};

export default FormLogin;
