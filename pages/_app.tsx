import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider, Typography, Box} from "@mui/material";
import { Grid } from "@mui/material";
import theme from '../components/theme';
import Link from '../components/CustomLink'
import '../styles/global_style.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sx={{ marginLeft: {xs: 1, sm: 0}, marginRight: {xs: 1, sm: 0} }} sm={3} md={5}>
      <Box sx={{ marginTop: {xs: 3, sm: 3}}}>
        <Link href={"/"}>
          <Typography variant="subtitle2" fontWeight={400} sx={{ textTransform: "uppercase" }}>
            Home
          </Typography>
        </Link>
        <Link href={"/notes"}>
          <Typography variant="subtitle2" fontWeight={400} sx={{ textTransform: "uppercase"}}>
            Notes
          </Typography>
        </Link>
        <Link href={"https://github.com/nkawaller/digital-garden"}>
          <Typography variant="subtitle2" fontWeight={400} sx={{ textTransform: "uppercase" }}>
            Code
          </Typography>
        </Link>
      </Box>
          </Grid>
        <Grid item sx={{ marginLeft: {xs: 1, sm: 0}, marginRight: {xs: 1, sm: 0} }} sm={7} md={5}>
        <DefaultSeo
          title="Nathan Kawaller's digital garden"
          description="Nathan's notes on computer science, music and korean"
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://www.nathankawaller.com/",
            site_name: "Nathan Kawaller Working Notes",
          }}
        />
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
