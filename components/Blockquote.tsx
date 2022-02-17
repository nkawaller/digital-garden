import { Box, Typography } from "@mui/material";

const Blockquote = (props) => {
  return (
    <Box
      mt={4}
      mb={4}
    >
      <blockquote
        style={{
          color:  "#949494",
          borderLeft: "5px solid #949494",
          paddingLeft: "0.5rem"
        }}
      >
        {props.children}
      </blockquote>
    </Box>
  );
};
export default Blockquote;
