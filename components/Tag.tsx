import { Box, Typography } from "@mui/material"

const Tag = ({tag}) => {
    return (
        <Box sx={{marginTop: { xs: 12, sm: 3 }, marginBottom: 3}}>
        <Typography variant="caption" sx={{fontFamily: "JetBrains Mono", fontSize: ".694rem", color: "#707070"}}>{tag}</Typography>
        </Box>
    )
}

export default Tag;