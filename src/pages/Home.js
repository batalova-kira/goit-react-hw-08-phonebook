import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,

          height: '100vh',
        }}
      >
        <Typography
          component="h3"
          variant="h5"
          sx={{
            color: 'primary.contrastText',
            textTransform: 'uppercase',
            fontWeight: 600,
            textAlign: 'center',
            pt: 8,
          }}
        >
          Hello! It`s Home Page
        </Typography>
      </Box>
    </>
  );
}
