import { Stack } from '@mui/material';
import { StyledLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Stack direction="row" spacing={2} sx={{ flexGrow: 1, p: 0 }}>
      <StyledLink to="/" color="inherit">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts" color="inherit">
          Contacts
        </StyledLink>
      )}
    </Stack>
  );
};
