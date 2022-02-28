import { Box, Typography } from "@mui/material";
import Link from "../components/CustomLink";
import noteLinks from "../utils/noteLinks";

const Home = () => {
  return (
    <>
      <Box sx={{ textTransform: "uppercase", marginTop: {xs: 12, sm: 3}, marginBottom: 12}}>
        <Typography variant="h1" fontWeight={400}>
          Note List
        </Typography>
      </Box>
      <Box>
        {noteLinks.map(n => {
            return (
                <Link href={"/" + n}>
            <Typography variant="body1">{n}</Typography>
            </Link>
            )
        })}
        </Box>
    </>
  );
};

export default Home;