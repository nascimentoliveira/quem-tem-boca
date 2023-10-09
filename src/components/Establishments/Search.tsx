import { useRouter } from 'next/navigation';
import { TextField, alpha, styled } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import SearchIcon from '@mui/icons-material/Search';
import { SearchForm } from '@/types/Search';
import Swal from 'sweetalert2';

interface SearchProps {
  showSearch?: boolean;
}

const Search = (props: SearchProps) => {
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      query: '',
    },
  });
  const { handleSubmit, control, reset } = methods;

  const onSubmit = async (search: SearchForm) => {
    const query = search.query.trim();
    if (query !== '' && query.length >= 3) {
      router.push(`/establishments?query=${query}`);
    } else {
      Swal.fire({
        icon: 'question',
        title: 'Me fale mais!',
        text: 'Preciso de 3 caracteres, no mínimo, para fazer a pesquisa para você.',
      });
    }
    reset({ query: '' });
  };

  const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    boxShadow: '0 0 5 2px #929292 inset',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.4),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    maxWidth: '50ch',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      display: props?.showSearch ? 'block' : 'none',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        color: theme.palette.secondary.contrastText,
      },
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.primary.contrastText,
      },
    },
  }));
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="query"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                {...field}
                fullWidth
                sx={{ color: {} }}
                placeholder="Busque por restaurantes, pratos ou bebidas..."
              />
            )}
          />
        </form>
      </FormProvider>
    </SearchContainer>
  );
};

export default Search;
