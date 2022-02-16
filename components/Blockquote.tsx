import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const Blockquote = (props) => {
  return (
    <Box
      mb={4}
      sx={
        {
          // backgroundColor: alpha("#c9c7c5", 0.2),
          // borderRadius: 2,
          // padding: 2,
          // overflow: 'auto',
          // WebkitOverflowScrolling: "touch"
        }
      }
    >
      <blockquote
        style={{
          color: "#28282a",
        //   fontFamily: "monospace",
          fontSize: ".833rem",
          fontWeight: 600,
          background: "#f9f9f9",
          borderLeft: "10px solid #ccc",
            // margin: "1.5em 10px",
            // padding: "0.5em 10px",
          padding: "0.5rem",
        }}
      >
        {props.children}
      </blockquote>
    </Box>
  );
};
export default Blockquote;
