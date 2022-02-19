import type { AppProps } from "next/app";
import { ThemeProvider, Typography, Box} from "@mui/material";
import { Grid } from "@mui/material";
import theme from '../components/theme';
import Link from '../components/CustomLink'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sx={{ marginLeft: {xs: 1, sm: 0}, marginRight: {xs: 1, sm: 0} }} sm={3} md={5}>
      <Box sx={{ marginTop: {xs: 3, sm: 3}}}>
        <Link href={"/contents"}>
          <Typography variant="subtitle2" fontWeight={400} sx={{ textTransform: "uppercase" }}>
            Notes
          </Typography>
        </Link>
      </Box>
          </Grid>
        <Grid item sx={{ marginLeft: {xs: 1, sm: 0}, marginRight: {xs: 1, sm: 0} }} sm={7} md={5}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
