import { Box } from "@mui/material";

const Blockquote = (props) => {
  return (
    <Box
      mt={4}
      mb={4}
    >
      <blockquote
        style={{
          color:  "#707070",
          borderLeft: "5px solid #707070",
          paddingLeft: "0.5rem"
        }}
      >
        <i>
        {props.children}
        </i>
      </blockquote>
    </Box>
  );
};
export default Blockquote;
