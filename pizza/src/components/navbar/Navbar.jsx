
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
    <div className="pizza__navbar" >
     
     <Button className='pizza__navbar-Header' color="inherit">Pizza Project</Button>
   

       </div>

   
  )
}

export default Navbar;



// <Box sx={{ flexGrow: 1 }}>
   
// <AppBar  position="static">
//   <Toolbar>
//     <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
//       The Pizza Project
//     </Typography>
    
//    {/* <Button color="inherit">Home</Button>
//   <Button color="inherit">About Pizza</Button>
//   <Button color="inherit">Why Pizza is the best</Button>
//   <Button color='secondary' >Pizza is great but Pasta</Button>  */}
//   </Toolbar>
// </AppBar>

// </Box>