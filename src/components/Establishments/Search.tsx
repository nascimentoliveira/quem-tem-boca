import { InputBase, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  showSearch?: boolean;
}

const Search = (props: SearchProps) => {
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

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
    },
  }));
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase fullWidth placeholder="Busque por restaurantes, pratos ou bebidas..." />
    </SearchContainer>
  );
};

export default Search;
