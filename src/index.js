import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from 'components/GlobalStyle';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { teal, purple } from '@mui/material/colors';
// const theme = createTheme({
//   palette: {
//     white: '#fff',
//     darkTeal: '#007c85',
//     teal: '#0096a0',
//     lightGrey: '#DFDFDF',
//     red: '#e50000',
//   },
//   radii: {
//     sm: '4px',
//     md: '10px',
//     lg: '70px',
//   },
//   spacing: value => `${value * 4}px`,
// });
const theme = createTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
      darker: teal[900],
      // contrastText: '#fff',
    },
    secondary: {
      main: purple[500],
      light: purple[500],
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#47008F',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
