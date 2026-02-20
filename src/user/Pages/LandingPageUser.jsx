import React from 'react'
import UserHeader from '../components/UserHeader'
import UserFooter from '../components/UserFooter'
import { Box, Typography, Avatar, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "JULIANNA V.",
    location: "PARIS, FRANCE",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The craftsmanship is unparalleled; every piece feels like a work of art tailored just for me."
  },
  {
    name: "MARCUS B.",
    location: "NEW YORK, NY",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "A curated experience that feels personal and profoundly exclusive. The attention to detail is remarkable."
  },
  {
    name: "ELENA S.",
    location: "MILAN, ITALY",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Timeless pieces that define my wardrobe with effortless elegance. I find myself returning every season."
  }
];

function LandingPageUser() {
  return (
    <>
    <UserHeader/>

    {/* landing page image section */}
    <section>

 <Box
  sx={{
    height: "60vh",
    backgroundImage: `url("https://t4.ftcdn.net/jpg/03/97/34/39/360_F_397343924_6WlXOaMVHNKkhMs2l8AHJ5e9MQ03YiBU.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    position: "relative",
  }}
>
  {/* Premium Gradient Overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
    }}
  />

  {/* Content */}
  <Box sx={{ position: "relative", zIndex: 2, px: 3 }}>
    {/* Main Title */}
    <Typography
      sx={{
        fontFamily: "serif",
        fontSize: { xs: "2.5rem", md: "4.5rem" },
        fontWeight: 500,
        letterSpacing: 4,
        textShadow: "2px 4px 15px rgba(0,0,0,0.6)",
      }}
    >
      HASTHKALA
    </Typography>

    {/* Decorative Line */}
    <Box
      sx={{
        width: 80,
        height: 3,
        background: "linear-gradient(90deg, #8e2de2, #4a00e0)",
        mx: "auto",
        my: 2,
        borderRadius: 5,
      }}
    />

    {/* Tagline */}
    <Typography
      sx={{
        fontFamily: "serif",
        fontStyle: "italic",
        fontSize: { xs: "1rem", md: "1.5rem" },
        maxWidth: 700,
        mx: "auto",
        mb: 2,
        opacity: 0.9,
      }}
    >
      Crafted with Love to Bring Handmade Happiness for Every Occasion.
    </Typography>

    <Typography
      sx={{
        mb: 4,
        letterSpacing: 2,
        fontSize: "0.9rem",
        opacity: 0.8,
      }}
    >
      By Smitha
    </Typography>

    {/* Buttons */}
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #8e2de2, #4a00e0)",
          px: 5,
          py: 1.5,
          fontWeight: 600,
          borderRadius: "30px",
          letterSpacing: 1,
          boxShadow: "0px 8px 25px rgba(142,45,226,0.4)",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0px 12px 30px rgba(142,45,226,0.6)",
          },
        }}
      >
        SIGN UP
      </Button>

      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          borderColor: "#fff",
          px: 5,
          py: 1.5,
          borderRadius: "30px",
          letterSpacing: 1,
          backdropFilter: "blur(4px)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.15)",
            borderColor: "#fff",
          },
        }}
      >
        SHOP COLLECTION
      </Button>
    </Box>
  </Box>
</Box>
    </section>

    {/* Featured Collections Section */}
<section>
  <Box sx={{ py: 8, px: { xs: 3, md: 10 }, backgroundColor: "#f8f8f6"}}>

    {/* Header */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 6,
       
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "serif",
          fontWeight: 500, 
        }}
      >
        Featured Collection
      </Typography>

      <Button
        variant="outlined"
        sx={{
          fontSize: "0.75rem",
          letterSpacing: 1,
          color: "#666",
        }}
      >
        View All
      </Button>
    </Box>


    <Box sx={{display:"flex" ,
   flexDirection: "row",
   gap:3,
   justifyContent:"space-between",
 

  
    }}>
<Box sx={{width:"300px", boxShadow:"4px,2px,8px", borderRadius:"50px", backgroundColor:"#FFF", p:4}}>
          <Box
            sx={{
              backgroundImage: `url("https://www.royalcropscience.com/product2/dummyproductimage.jpg")`,
              height: "350px",
              
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
              borderRadius:"10%"
            }}
          />

          <Typography variant="h6">Title</Typography>
          <Typography sx={{ color: "#777", mb: 1 }}>
            Description
          </Typography>
          <Typography sx={{   color: "#8e2de2", fontWeight: 600,":hover":{
            cursor:"pointer",
            textDecoration:"underline"
          } }}>
            Discover
          </Typography>
        </Box>

        <Box sx={{width:"300px", boxShadow:"4px,2px,8px", borderRadius:"50px", backgroundColor:"#FFF", p:4}}>
          <Box
            sx={{
              backgroundImage: `url("https://www.royalcropscience.com/product2/dummyproductimage.jpg")`,
              height: "350px",
              
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
              borderRadius:"10%"
            }}
          />

          <Typography variant="h6">Title</Typography>
          <Typography sx={{ color: "#777", mb: 1 }}>
            Description
          </Typography>
          <Typography sx={{   color: "#8e2de2", fontWeight: 600,":hover":{
            cursor:"pointer",
            textDecoration:"underline"
          } }}>
            Discover
          </Typography>
        </Box>


        <Box sx={{width:"300px", boxShadow:"4px,2px,8px", borderRadius:"50px", backgroundColor:"#FFF", p:4}}>
          <Box
            sx={{
              backgroundImage: `url("https://www.royalcropscience.com/product2/dummyproductimage.jpg")`,
              height: "350px",
              
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
              borderRadius:"10%"
            }}
          />

          <Typography variant="h6">Title</Typography>
          <Typography sx={{ color: "#777", mb: 1 }}>
            Description
          </Typography>
          <Typography sx={{   color: "#8e2de2", fontWeight: 600,":hover":{
            cursor:"pointer",
            textDecoration:"underline"
          } }}>
            Discover
          </Typography>
        </Box>


        <Box sx={{width:"300px", boxShadow:"4px,2px,8px", borderRadius:"50px", backgroundColor:"#FFF", p:4}}>
          <Box
            sx={{
              backgroundImage: `url("https://www.royalcropscience.com/product2/dummyproductimage.jpg")`,
              height: "350px",
              
              backgroundSize: "cover",
              backgroundPosition: "center",
              mb: 3,
              borderRadius:"10%"
            }}
          />

          <Typography variant="h6">Title</Typography>
          <Typography sx={{ color: "#777", mb: 1 }}>
            Description
          </Typography>
          <Typography sx={{   color: "#8e2de2", fontWeight: 600,":hover":{
            cursor:"pointer",
            textDecoration:"underline"
          } }}>
            Discover
          </Typography>
        </Box>

      



    </Box>

   

  </Box>
</section>

{/*Testimonial */}


<section>
   <Box
  sx={{
    height: "400px",
    background:
      "radial-gradient(circle at center, #f4c48c 0%, #e0a96d 60%, #d89155 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    px: 2,
    overflow: "hidden", 
  }}
>


  {/* Heading */}
  <Typography
    sx={{
      fontFamily: "serif",
      fontSize: { xs: "1.2rem", md: "1.8rem" },
      mb: 2,
      color: "#1c1c1c",
    }}
  >
    Voices of the Collection
  </Typography>

  {/* Swiper */}
  <Box sx={{ width: "100%", maxWidth: 600 }}>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000 }}
      loop
      slidesPerView={1}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <Box px={2}>
            <Avatar
              src={item.image}
              sx={{
                width: 60,
                height: 60,
                margin: "0 auto",
                mb: 1,
              }}
            />

            <Typography
              sx={{
                fontSize: "0.8rem",
                fontStyle: "italic",
                mb: 1,
                color: "#1c1c1c",
              }}
            >
              "{item.text}"
            </Typography>

            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
              {item.name}
            </Typography>

            <Typography sx={{ fontSize: "0.65rem" }}>
              {item.location}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>

  
</Box>
</section>


    <UserFooter/>
    </>
   
  )
}

export default LandingPageUser