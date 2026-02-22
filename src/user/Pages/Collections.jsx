import React, { useContext } from 'react'
import UserHeader from '../components/UserHeader'
import UserFooter from '../components/UserFooter'
import { Box, Button, Typography } from '@mui/material'
import { contextState } from '../../context/ContextApiState'

function Collections() {
  const {open,setOpen}= useContext(contextState)
  return (

<   >
    <UserHeader/>
    
        <Box
  sx={{
    minHeight: "80vh",
   
    background: "linear-gradient(135deg, #e8e2d6, #cdc695)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    px: 2,
  }}
>
  <Box
    sx={{
      textAlign: "center",
      maxWidth: 500,
      width: "100%",
      p: { xs: 3, md: 5 },
      borderRadius: 3,
      backgroundColor: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    }}
  >
    
 <Box sx={{display:"flex", flexDirection:'column',  justifyContent:'center', alignItems:'center'}}>
  {/* Button */}
    <Button
    onClick={()=>setOpen(true)}
      variant="contained"
      sx={{
        px: 4,
        py: 1.2,
        backgroundColor: "#1c1c1c",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "#000",
        },
      }}
    >
      Login
    </Button>
    {/* GIF */}

        <Box
          component="img"
          src="https://static.wixstatic.com/media/4da2db_794ff2da347e4350a77e44abed2e272c~mv2.gif"
          alt="Login Required"
          sx={{
            width: { xs: 120, md: 160 },
            mb: 3,
          }}
        />
 </Box>


    {/* Title */}
    <Typography
      sx={{
        fontSize: { xs: "1.5rem", md: "2rem" },
        fontWeight: 600,
        mb: 2,
      }}
    >
      Please Login to Access Our Collections
    </Typography>

    {/* Subtitle */}
    <Typography
      sx={{
        fontSize: "0.95rem",
        color: "#555",
        mb: 4,
      }}
    >
      Sign in to explore exclusive products and personalized features.
    </Typography>

   
  </Box>
</Box>
    
        <UserFooter/>
</ >
  )
}

export default Collections