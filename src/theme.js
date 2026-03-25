import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f48fb1', // Pastel Pink
    },
    secondary: {
      main: '#fff176', // Pastel Yellow
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      color: '#ad1457',
    },
    h5: {
      color: '#6a1b9a',
    },
  },
});

export default theme;
