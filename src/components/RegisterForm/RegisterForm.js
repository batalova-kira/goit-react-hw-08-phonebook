import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        type="text"
        name="name"
        label="Username"
        size="small"
        required
        fullWidth
        sx={{
          backgroundColor: 'primary.contrastText',
          color: 'secondary.darker',
          mb: 2,
          borderRadius: 1,
        }}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        size="small"
        required
        fullWidth
        sx={{
          backgroundColor: 'primary.contrastText',
          color: 'secondary.darker',
          mb: 2,
          borderRadius: 1,
        }}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        size="small"
        required
        fullWidth
        sx={{
          backgroundColor: 'primary.contrastText',
          color: 'secondary.darker',
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
        Register
      </Button>
    </form>
  );
};
