import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        type="email"
        label="Email"
        name="email"
        size="small"
        required
        fullWidth
        sx={{
          backgroundColor: 'primary.contrastText',
          color: 'primary.darker',
          mb: 2,
          borderRadius: 1,
        }}
      />
      <TextField
        type="password"
        label="Password"
        name="password"
        size="small"
        required
        fullWidth
        sx={{
          backgroundColor: 'primary.contrastText',
          color: 'primary.darker',
          mb: 2,
          borderRadius: 1,
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: 'secondary.main',
          ':hover': {
            backgroundColor: 'secondary.dark',
          },
        }}
      >
        Log In
      </Button>
    </form>
  );
};
