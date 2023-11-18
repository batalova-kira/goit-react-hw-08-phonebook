import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography component="span" sx={{ flexGrow: 1 }}>
        Welcome, {user.name}!
      </Typography>
      <Button
        color="inherit"
        type="button"
        sx={{ p: 0 }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
