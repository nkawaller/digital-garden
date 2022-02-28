import { Box, Typography } from "@mui/material"

const Tag = ({tag}) => {
    return (
        <Box sx={{marginTop: { xs: 12, sm: 3 }, marginBottom: 1}}>
        <Typography variant="caption" sx={{fontFamily: "JetBrains Mono", fontSize: ".694rem", color: "#949494"}}>{tag}</Typography>
        </Box>
    )
}

export default Tag;