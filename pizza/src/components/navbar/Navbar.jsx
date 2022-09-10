
import React from "react";
import "./navbar.css";
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#000000',
    },
    error: {
      main: '#ff9800',
    },
  } 
});


export const Navbar = () => {
  return (
  
    <Box sx={{ flexGrow: 1 }}>
   
     <AppBar  style={{ background:'conic-gradient(from 100deg at 55% 45%, #2D0453C4 30%,  #9E9AFFD1 70%,#ffff66 77%, #5a3d76 99%)'}} position="static">
       <Toolbar>
         <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           The Pizza Project
         </Typography>
         
        {/* <Button color="inherit">Home</Button>
       <Button color="inherit">About Pizza</Button>
       <Button color="inherit">Why Pizza is the best</Button>
       <Button color='secondary' >Pizza is great but Pasta</Button>  */}
       </Toolbar>
     </AppBar>

    </Box>
   
  )
}

export default Navbar;



