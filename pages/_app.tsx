import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { Grid } from "@mui/material";
import theme from '../components/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sm={3} md={5} />
        <Grid item sm={7} md={5} mr={1} ml={1}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
