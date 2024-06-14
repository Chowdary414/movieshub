import React from 'react'
import { AppBar,Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import NavigationLink from './shared/NavigationLink';
import { useAuth } from '../context/AuthContext';
import { Box,Avatar, } from '@mui/material'

const Header = () => {
    const auth=useAuth();
  return <AppBar sx={{bgcolor:"transparent",position:"static",bpxShadow:"none"}}>
    <Toolbar sx={{display:"flex"}}>
     <Logo />
     <div>
       {auth.isLoggedIn?(
       <>
        <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="flex-start"
    >
       <NavigationLink bg="blue" to="/chat" text="playlist" textcolor="black"  />
       <Avatar sx={{bgcolor:"#51538f",color:"white",fontWeight:700}}>
          {auth?.user?.name[0]}</Avatar> 
          </Box>
       </>):(<>
        <NavigationLink bg="#00fffc" to="/login" text="login" textcolor="black" />
       <NavigationLink  bg="#51538f" textcolor="white" to="/signup" text="signup" onClick={auth.logout}/>
       </>
    )}
     </div>
    </Toolbar>
  </AppBar>
}

export default Header
