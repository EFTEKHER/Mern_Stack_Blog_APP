import React from 'react'
import {AppBar, Toolbar, Typography,Box,Button} from '@mui/material'
const Header = () => {
  return (
   <AppBar sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,50,156,1) 75%, rgba(0,212,255,1) 94%);"}}>
   <Toolbar>
   <Typography variant='h4'>EA BlogsApp</Typography>
   <Box display="flex" marginLeft="auto"  >
   <Button variant="contained"  color='error' sx={{margin:1,borderRadius:10}}>Login</Button>
   
   <Button variant="contained"   color='error'  sx={{margin:1,borderRadius:10}}>SignUp</Button>
   </Box>
   </Toolbar>
   </AppBar>
  )
}

export default Header
