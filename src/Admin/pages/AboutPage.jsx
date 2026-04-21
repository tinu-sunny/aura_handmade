import React from 'react'
import UserHeader from '../components/UserHeader'
import UserFooter from '../components/UserFooter'
import { Box, Container, Grid, Typography } from "@mui/material";

function AboutPage() {
  return (

  <>
        <UserHeader/>
        
{/* story */}

     <Box
      sx={{
        height: "50vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8))",
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, px: 3 }}>
        {/* Small Top Text */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            letterSpacing: 4,
            color: "#d4af37",
            mb: 3,
          }}
        >
          EST. 1924
        </Typography>

        {/* Main Heading */}
        <Typography
          sx={{
            fontFamily: "serif",
            fontSize: { xs: "2.5rem", md: "5rem" },
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          The Soul of
        </Typography>

        <Typography
          sx={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: { xs: "2.5rem", md: "5rem" },
            fontWeight: 400,
          }}
        >
          HASTHKALA
        </Typography>

        {/* Gold Divider Line */}
        <Box
          sx={{
           
            height: "2px",
            backgroundColor: "#d4af37",
            mx: "auto",
            mt: 4,
          }}
        />
      </Box>
    </Box>



{/* about */}

<Box
      sx={{
        backgroundColor: "#f5f3ef",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container >
        <Grid sx={{display:"flex" , flexDirection:{xs:'column' , md:"row", lg:"row"},gap: { xs: 5, md: 4, lg: 4 }}}>
          
          {/* LEFT CONTENT */}
         <Grid item xs={12} md={6}>
  {/* Top Accent Line */}
  <Box
    sx={{
      width: 60,
      height: "3px",
      backgroundColor: "#d4af37",
      mb: 4,
    }}
  />

  {/* Heading */}
  <Typography
    sx={{
      fontFamily: "serif",
      fontSize: { xs: "2rem", md: "3rem" },
      lineHeight: 1.2,
      fontWeight: 500,
      color: "#1c1c1c",
    }}
  >
    The Creative Head
  </Typography>

  {/* Name with Gold Line */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      mt: 2,
      mb: 4,
    }}
  >
    <Box
      sx={{
        width: 50,
        height: "2px",
        backgroundColor: "#d4af37",
      }}
    />
    <Typography
      sx={{
        fontFamily: "serif",
        fontStyle: "italic",
        fontSize: "1.2rem",
        color: "#7f6a0d",
      }}
    >
      Smitha Harish
    </Typography>
  </Box>

  {/* Description */}
  <Typography
    sx={{
      color: "#5c5c5c",
      fontSize: "0.95rem",
      lineHeight: 1.9,
      mb: 3,
      maxWidth: 520,
    }}
  >
    <strong>Hasthkala_by_Smitha</strong> is a handmade art and home décor
    brand dedicated to creating beautiful handcrafted products made entirely
    by hand with love and care.

    Every piece is thoughtfully designed to bring warmth, creativity, and
    elegance into your space. From personalized gifts to unique home décor,
    each creation reflects passion and attention to detail.
  </Typography>

  {/* Highlight Points */}
  <Box sx={{ mb: 4 }}>
    {[
      "All products are handmade",
      "Custom orders available",
      "Perfect for gifts & special occasions",
    ].map((item, index) => (
      <Typography
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          fontSize: "0.9rem",
          color: "#6b6b6b",
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#d4af37",
          }}
        />
        {item}
      </Typography>
    ))}
  </Box>

  {/* Quote Section */}
  <Box sx={{ display: "flex", gap: 2 }}>
    <Box
      sx={{
        width: "3px",
        backgroundColor: "#d4af37",
      }}
    />
    <Typography
      sx={{
        fontStyle: "italic",
        color: "#6b6b6b",
        fontSize: "0.9rem",
        lineHeight: 1.8,
      }}
    >
      “Luxury is not loud; it is the presence of quality so profound it requires
      no introduction.”
      <br />
      <Box component="span" sx={{ fontWeight: 500 }}>
        📩 DM for custom orders
      </Box>
    </Typography>
  </Box>
</Grid>

        {/* RIGHT IMAGE */}
<Grid item xs={12} md={6}>
  <Box
    sx={{
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
      transition: "all 0.4s ease",
      "&:hover img": {
        transform: "scale(1.05)",
      },
    }}
  >
    {/* Gold Corner Accent */}
    <Box
      sx={{
        position: "absolute",
        top: 15,
        left: 15,
        width: 50,
        height: 50,
        borderTop: "3px solid #d4af37",
        borderLeft: "3px solid #d4af37",
        zIndex: 2,
      }}
    />

    <Box
      component="img"
      src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
      alt="Artisan Workshop"
      sx={{
        width: "100%",
        height: { xs: 300, md: 450 },
        objectFit: "cover",
        transition: "transform 0.5s ease",
      }}
    />
  </Box>
</Grid>

        </Grid>
      </Container>
    </Box>





{/* Subscription Section */}
<Box
  sx={{
    backgroundColor: "#efd4b9",
    py: { xs: 6, md: 10 },
    px: 3,
  }}
>
  <Box
    sx={{
      maxWidth: 700,
      mx: "auto",
      textAlign: "center",
    }}
  >
    {/* Heading */}
    <Typography
      sx={{
        fontFamily: "serif",
        fontSize: { xs: "1.8rem", md: "2.8rem" },
        fontWeight: 500,
        mb: 2,
        color: "#1c1c1c",
      }}
    >
      Join Our Inner Circle
    </Typography>

    {/* Subtext */}
    <Typography
      sx={{
        fontSize: "0.95rem",
        color: "#5c5c5c",
        mb: 4,
      }}
    >
      Sign up to receive your private invitation to our newest collections.
    </Typography>

    {/* Input + Button */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        justifyContent: "center",
      }}
    >
      <Box
        component="input"
        type="email"
        placeholder="Enter your email address"
        sx={{
          flex: 1,
          px: 3,
          py: 1.8,
          borderRadius: "10px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "0.9rem",
          minWidth: { sm: 300 },
        }}
      />

      <Box
        component="button"
        sx={{
          px: 4,
          py: 1.8,
          borderRadius: "30px",
          border: "none",
          backgroundColor: "#1c1c1c",
          color: "#fff",
          fontWeight: 500,
          letterSpacing: 1,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#000",
            transform: "translateY(-2px)",
          },
        }}
      >
        SUBSCRIBE
      </Box>
    </Box>
  </Box>
</Box>


        <UserFooter/>
  </>
  )
}

export default AboutPage