import { Box, Typography } from "@mui/material";

const TimeStamp = ({ updated }) => {
  return (
    <>
      <Box sx={{marginBottom: 21, marginTop: 1}}>
        <Typography variant="caption" sx={{fontFamily: "JetBrains Mono", fontSize: ".694rem", color: "#707070"}}>{updated}</Typography>
      </Box>
    </>
  );
};

export default TimeStamp;
