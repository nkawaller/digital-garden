import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: "2.488rem",
      fontWeight: 400
    },
    h2: {
      fontSize: "2.074em",
    },
    h3: {
      fontSize: "1.728rem",
    },
    h4: {
      fontSize: "1.44rem",
    },
    h5: {
      fontSize: "1.2rem",
    },
    body1: {
      fontWeight: 300,
    },
  },
});

export default theme;