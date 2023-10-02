import { Dispatch, SetStateAction } from 'react';
import { Button, Typography } from '@mui/material';

import { Form } from '@/app/page';
import styles from '@/app/page.module.css';

interface ChangeFormButtonProps {
  currentForm: Form;
  setCurrentForm: Dispatch<SetStateAction<Form>>;
}

const ChangeFormButton = ({ currentForm, setCurrentForm }: ChangeFormButtonProps) => {
  return (
    <div className={styles.buttonChangeForm}>
      <Button
        variant="text"
        sx={{
          color: 'white',
          fontSize: '18px',
          height: 'max-content',
          flexDirection: 'column',
          alignItems: 'flex-end',
          textTransform: 'none',
        }}
        onClick={() => setCurrentForm(currentForm === 'join' ? 'login' : 'join')}
      >
        <Typography whiteSpace="nowrap">
          {currentForm === 'join' ? 'Já possui conta?' : 'Não tem conta?'}
        </Typography>
        <Typography color="secondary" whiteSpace="nowrap">
          {currentForm === 'join' ? 'Entre' : 'Cadastre-se'}
        </Typography>
      </Button>
    </div>
  );
};

export default ChangeFormButton;
