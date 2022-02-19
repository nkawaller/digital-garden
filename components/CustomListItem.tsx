import { Typography, ListItem, ListItemIcon} from '@mui/material'
import ClearSharpIcon from "@mui/icons-material/ClearSharp";

const CustomListItem = (props) => {
return (
    <ListItem dense={true}>
      <ListItemIcon>
        <ClearSharpIcon sx={{color: "#949494", fontSize: "0.5rem"}}/>
      </ListItemIcon>
      <Typography variant="body1" sx={{marginLeft: "-2rem"}}>{props.children}</Typography>
    </ListItem>
  )
}

export default CustomListItem;