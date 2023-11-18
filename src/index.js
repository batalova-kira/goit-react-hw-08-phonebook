import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      bcglight: '#e0f6fa',
      light: '#4ec9df',
      main: '#16b3cf',
      dark: '#0f8fa2',
      darker: '#08595f',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff542e',
      light: '#ff8b6c',
      dark: '#f64624',
      darker: '#cf3116',
      bcglight: '#fdeae8',
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
