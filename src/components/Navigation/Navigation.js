import { Stack } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Stack direction="row" spacing={2} sx={{ flexGrow: 1, p: 0 }}>
      <NavLink to="/" color="inherit">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" color="inherit">
          Contacts
        </NavLink>
      )}
    </Stack>
  );
};
