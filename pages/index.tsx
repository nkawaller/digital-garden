import { Box, Typography } from "@mui/material";
import Link from "../components/CustomLink";

const Home = () => {
  return (
    <>
      <Box sx={{ textTransform: "uppercase", marginTop: {xs: 12, sm: 3}, marginBottom: 21}}>
        <Typography variant="h1" fontWeight={400}>
          Nathan Kawaller Working Notes
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1' sx={{marginBottom: 4}}>
        These notes are the output from my daily computer science
        study. I've found that I learn best by tyring to explain
        concepts in my own words, and by making connections between
        ideas by linking notes together. You can navigate them by
        heading over to the table of&nbsp;
        <Link href={"/contents"}>
        contents
        </Link>,
        picking a topic and following the links.
        <br></br>
        <br></br>
        This unstructured style of linked notes is called a digital
        garden and there are great resources out there if
        you'd like to build your own. Here are a few that have
        inspired me.<br></br>
        </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
        <Link href={"https://notes.andymatuschak.org/About\_these\_notes"}>
          Andy Matuschak
        </Link><br></br>
        <Link href={"https://maggieappleton.com/garden-history"}>
          Maggie Appleton
        </Link><br></br>
        <Link href={"https://nesslabs.com/digital-garden-tiddlywiki"}>
          Anne-Laure Le Cunff
        </Link><br></br>
        </Typography>
        </Box>
    </>
  );
};

export default Home;
