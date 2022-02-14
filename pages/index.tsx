import { Box, Typography } from "@mui/material";
import Link from "../components/CustomLink";

const Home = () => {
  return (
    <>
      <Box mt={3} sx={{ textTransform: "uppercase" }}>
        <Typography variant="h1" fontWeight={500}>
          Nathan Kawaller
        </Typography>
      </Box>
      <Box mt={1}>
        <Link href={"/what-is-a-function"}>
          <Typography variant="h4" fontWeight={300}>
            Working Notes
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Home;
