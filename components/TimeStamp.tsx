import { Box, Typography } from "@mui/material";

const TimeStamp = ({ updated }) => {
  return (
    <>
      <Box sx={{marginBottom: 21}}>
        <Typography variant="caption" sx={{fontFamily: "JetBrains Mono", fontSize: ".579rem", color: "#949494"}}>{updated}</Typography>
      </Box>
    </>
  );
};

export default TimeStamp;
