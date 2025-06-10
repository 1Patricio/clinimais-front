import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function Sidebar({ open, onClose }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
     
      <Box sx={{ p: 1.5, fontWeight: 'bold', fontSize: 20}} display="flex"> 
         <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onClose}
            sx={{ mr: 2, textAlign:'left'}}
            style={{marginLeft: '12px', marginTop:'5px'}}
          >
            <MenuIcon />
          
      </IconButton>
        <img src="src/assets/clinimais-horizontal.jpeg" alt="" style={{height:"60%", width:"60%"}}/>      
        </Box>
      <Divider />
      <List>
        
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Início" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/pacientes">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Pacientes" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/medicos">
            <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
            <ListItemText primary="Médicos" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/consultas">
            <ListItemIcon><EventNoteIcon /></ListItemIcon>
            <ListItemText primary="Consultas" />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
}