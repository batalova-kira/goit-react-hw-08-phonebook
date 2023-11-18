import { Box, Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        height: '100vh',
        color: 'primary.darker',
        p: 2,
        backgroundImage:
          'url(https://images.unsplash.com/photo-1514810771018-276192729582?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundColor: 'primary.light',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography
        component="h3"
        variant="h5"
        sx={{
          color: 'primary.darker',
          textTransform: 'uppercase',
          fontWeight: 600,
          textAlign: 'center',
          pb: 2,
        }}
      >
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}
