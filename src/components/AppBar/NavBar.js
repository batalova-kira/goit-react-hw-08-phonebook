import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useAuth } from 'hooks/useAuth';
import { AppBar } from '@mui/material';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      sx={{
        position: 'static',
        display: 'flex',
        flexDirection: 'row',
        height: 16,
        pb: 2,
        p: 2,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: 'primary.darker',
        boxShadow: 2,
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
