import React, { useContext, useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import UserFooter from '../components/UserFooter'
import { Box, Button, Typography } from '@mui/material'
import { contextState } from '../../context/ContextApiState'
import {  Grid, Avatar,Chip  } from "@mui/material";
    import { Link as RouterLink } from "react-router-dom";
const collections = [
  { link:"n", title: "HOME NAME BOARDS", img: "https://rezica.com/cdn/shop/files/AgarwalsGold6.jpg?v=1712305383" },
  { link:"", title: "HOME DECORATION", img: "https://www.giboxonline.com/cdn/shop/articles/Homemade_Diwali_Decor_Ideas_1100x.jpg?v=1695376025" },
  { link:"", title: "FRIDGE MAGNETS", img: "https://www.ritualistic.in/cdn/shop/files/IMG_4589.jpg?v=1746967631" },
  { link:"", title: "NECKLACES", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJyUBXKemIOWYWJbvdgtE3MpvKEAV2dFFjg&s" },
  { link:"", title: "BANGLES", img: "https://i.pinimg.com/736x/30/98/4d/30984db2726da489f6f04574f656d25d.jpg" },
  { link:"", title: "CUPS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa7WoNoiuo3h_jtELPpAhmag9OQl-k23FHQ&s" },
  { link:"", title: "TRAYS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhf8ZQiRF9yz0UDyxCqlJ2xrK04Cjb4kpGg&s" },
  { link:"", title: "PHOTO FRAMES", img: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg" },
];

const products = [
  {
    name: "Cashmere Overcoat",
    price: "$1,250",
    image: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg",
    colors: ["#c69c6d", "#000", "#555"],
    badge: "NEW",
  },
  {
    name: "Silk Wrap Dress",
    price: "$890",
    image: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg",
    colors: ["#1c3c2d", "#7a1f1f"],
  },
  {
    name: "Chelsea Boots",
    price: "$650",
    image: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg",
    colors: ["#3b2a1e", "#000"],
  },
  {
    name: "Wool Blazer",
    price: "$950",
    image: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg",
    colors: ["#111", "#444"],
  },
  {
    name: "Velvet Trousers",
    price: "$520",
    image: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg",
    colors: ["#0f2e1d"],
  },
  {
    name: "Suede Tote Bag",
    price: "$1,100",
    image: "https://i.pinimg.com/236x/54/27/06/54270676f43df959cce15fb73f480f67.jpg",
    colors: ["#7a3e1c", "#5c2c10"],
  },
];
function Collections() {

  // contextAPI
  const {open,setOpen}= useContext(contextState)
// usestate
const [token,setToken]=useState('')

  // takeing token from sessionStorage
  useEffect(()=>{
    const tk = sessionStorage.getItem('token')
    console.log(tk);
    setToken(tk)
    
  },[])


  return (

<   >
    <UserHeader/>
    
    {!token ? <div>
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
    </div>:<div>
       <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "36px" },
          fontWeight: 600,
          mb: 1,
          fontFamily: "serif",
        }}
      >
        Browse Our Handcrafted Collections
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "#999",
          maxWidth: "650px",
          mx: "auto",
          mb: 5,
          fontSize: "14px",
        }}
      >
        Exquisite, one-of-a-kind pieces born from passion and traditional
        craftsmanship. Each item tells a unique story of heritage and artistry.
      </Typography>

      {/* Collection Grid */}
 

<Grid sx={{display:'flex' ,gap:3, flexWrap:'wrap'}}  justifyContent="center">
  {collections.map((item, index) => (
    <Grid
      item
      xs={6}
      sm={3}
      key={index}
      component={RouterLink}
      to={item.link}
      sx={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "0.3s",
          },
        }}
      >
        <Avatar
          src={item.img}
          alt={item.title}
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        />

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>
    </Box>


{/* products view */}

 <Box sx={{ px: { xs: 2, md: 8 }, py: 6, backgroundColor: "#f9fafb" }}>
      <Grid container gap={6} spacing={4}>
        {products.map((product, index) => (
          <Grid item  xs={12} sm={6} md={4} key={index} >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                p: 2,
                width:"100%",
                position: "relative",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
             

              {/* Product Image */}
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 320,
                  objectFit: "contain",
                  mb: 2,
                }}
              />

              {/* Product Info */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 500 }}>
                  name
                </Typography>
                <Typography sx={{ color: "#6b7280" }}>
                 price
                </Typography>
              </Box>

              
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>


      </div>}
    






        <UserFooter/>
</ >
  )
}

export default Collections