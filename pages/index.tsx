import { Box, Typography } from "@mui/material";
import Link from "../components/CustomLink";

const Home = () => {
  return (
    <>
      <Box sx={{ textTransform: "uppercase", marginTop: {xs: 12, sm: 3} }}>
        <Typography variant="h1" fontWeight={500}>
          Nathan Kawaller
        </Typography>
      </Box>
      <Box mt={1}>
        <Link href={"/contents"}>
          <Typography variant="h4" fontWeight={300}>
            Working Notes
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Home;
