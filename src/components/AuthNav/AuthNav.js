import { Box } from '@mui/material';
import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Box>
  );
};
