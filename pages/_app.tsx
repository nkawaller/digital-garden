import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { Grid } from "@mui/material";
import theme from '../components/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sm={3} md={5} />
        <Grid item sx={{ marginLeft: {xs: 1, sm: 0}, marginRight: {xs: 1, sm: 0} }} sm={7} md={5}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
