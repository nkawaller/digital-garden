import { Typography, Table, Box, TableHead, TableRow } from "@mui/material";
import CustomLink from "./CustomLink";
import CodeBlock from "./CodeBlock";
import Blockquote from "./Blockquote";

const components = {
  h1: (props) => (
    <Box mt={4} mb={8} sx={{ textTransform: "uppercase" }}>
      <Typography variant="h1">{props.children}</Typography>
    </Box>
  ),
  h2: (props) => (
    <Box mb={2}>
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
  li: (props) => <Typography variant="body1">{props.children}</Typography>,
  code: CodeBlock,
  table: (props) => (
    <Table>
      <Typography variant="body1">{props.children}</Typography>
    </Table>
  ),
  blockquote: Blockquote
};

export default components;
