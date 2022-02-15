import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

const CodeBlock = (props) => {
  return (
    <Box
      mb={4}
      sx={{
        backgroundColor: alpha("#c9c7c5", 0.2),
        borderRadius: 2,
        padding: 2,
        overflow: 'auto'
      }}
    >
      <code
        style={{
          color: "#28282a",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: ".833rem",
          fontWeight: 300,
        }}
      >
        {props.children}
      </code>
    </Box>
  );
};

export default CodeBlock;
