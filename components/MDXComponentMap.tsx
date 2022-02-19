import { Typography, Table, Box, List, ListItem, ListItemIcon } from "@mui/material";
import CustomLink from "./CustomLink";
import CodeBlock from "./CodeBlock";
import Blockquote from "./Blockquote";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";


const components = {
  h1: (props) => (
    <Box
      sx={{
        textTransform: "uppercase",
        marginTop: { xs: 12, sm: 3 },
        marginBottom: 21,
      }}
    >
      <Typography variant="h1">{props.children}</Typography>
    </Box>
  ),
  h2: (props) => (
    <Box mt={4} mb={2}>
      <Typography variant="h2">{props.children}</Typography>
    </Box>
  ),
  h3: (props) => <Typography variant="h3">{props.children}</Typography>,
  h4: (props) => <Typography variant="h4">{props.children}</Typography>,
  h5: (props) => <Typography variant="h5">{props.children}</Typography>,
  a: CustomLink,
  p: (props) => (
    <Box mb={4}>
      <Typography variant="body1">{props.children}</Typography>
    </Box>
  ),
  ul: (props) => <List>{props.children}</List>,
  li: (props) => (
    <ListItem dense={true}>
      <ListItemIcon>
        <ClearSharpIcon sx={{color: "#949494", fontSize: "0.5rem"}}/>
      </ListItemIcon>
      <Typography variant="body1">{props.children}</Typography>
    </ListItem>
  ),
  code: CodeBlock,
  table: (props) => (
    <Table sx={{ marginBottom: 4 }}>
      <Typography variant="body1">{props.children}</Typography>
    </Table>
  ),
  blockquote: Blockquote,
};

export default components;
