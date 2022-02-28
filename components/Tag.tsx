import { Box, Typography } from "@mui/material"

const Tag = () => {
    return (
        <Box sx={{marginTop: { xs: 12, sm: 3 }, marginBottom: 1}}>
        <Typography variant="caption" sx={{fontFamily: "JetBrains Mono", fontSize: ".694rem", color: "#949494"}}>Programming</Typography>
        </Box>
    )
}

export default Tag;