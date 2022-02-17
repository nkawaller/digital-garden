import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const Blockquote = (props) => {
  return (
    <Box
      mt={4}
      mb={4}
      sx={{
        // backgroundColor: alpha("#c9c7c5", 0.2),
        // borderRadius: 2,
        // padding: 2,
        // overflow: 'auto',
        // WebkitOverflowScrolling: "touch"
      }}
    >
      <blockquote
        style={{
          // color: "#8c99a6",
          color:  "#949494",
          // fontFamily: "JetBrains Mono",
          // fontSize: ".833rem",
          // fontWeight: 600,
          //   background: "#f9f9f9",
          //   backgroudColor: alpha("#c9c7c5", 0.2),
          borderLeft: "5px solid #949494",
          // margin: "1.5em 10px",
          // paddingTop: "2rem",
          // padding: "0.5em 10px",
          // padding: "0.5rem",
          // margin: "20px",
          paddingLeft: "0.5rem"
        }}
      >
        {props.children}
      </blockquote>
    </Box>
  );
};
export default Blockquote;
