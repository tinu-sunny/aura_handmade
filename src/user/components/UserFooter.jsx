import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function UserFooter() {
  return (
   <>
    <Box
      sx={{
        backgroundColor: "#f3f4f6",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Column 1 */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 600,
                letterSpacing: 4,
                mb: 2,
              }}
            >
             HASTHKALA
            </Typography>

            <Typography
              sx={{
                fontSize: "0.8rem",
                color: "#6b7280",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
             Crafted with Love  <br />to  Bring Handmade Happiness <br /> for Every Occasion. 
             
            
            </Typography>

            <Box>
              <IconButton
                sx={{
                  backgroundColor: "#e5e7eb",
                  mr: 1,
                  "&:hover": { backgroundColor: "#d1d5db" },
                }}
              >
                <PublicIcon fontSize="small" />
              </IconButton>

              <IconButton
                sx={{
                  backgroundColor: "#e5e7eb",
                  "&:hover": { backgroundColor: "#d1d5db" },
                }}
              >
                <CameraAltIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={3}>
            <Typography sx={titleStyle}> SERVICES</Typography>
            {["Shipping & Returns", "Bespoke Fitting", "Contact Us", "FAQs"].map((item) => (
              <Typography key={item} sx={linkStyle}>
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={3}>
            <Typography sx={titleStyle}>Quick Links 
</Typography>
          
              <Typography  sx={linkStyle}>
               Home
              </Typography>
               <Typography  sx={linkStyle}>
               Our Story
              </Typography>
               <Typography  sx={linkStyle}>
              Collections
              </Typography>
                <Typography  sx={linkStyle}>
              Contact Us
              </Typography>
              
    
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} md={3}>
            <Typography sx={titleStyle}>Location</Typography>

            <Typography sx={linkStyle}>
             TVM
            </Typography>

            <Typography
              sx={{
                ...linkStyle,
                mt: 2,
                color: "#7c3aed",
                fontWeight: 600,
              }}
            >
              FIND A BOUTIQUE
            </Typography>
          </Grid>

          
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid #e5e7eb",
            mt: 6,
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            © 2026 HASTHKALA. ALL RIGHTS RESERVED.
          </Typography>

          <Box>
            <Typography component="span" sx={bottomLinkStyle}>
              PRIVACY POLICY
            </Typography>
            <Typography component="span" sx={{ ...bottomLinkStyle, ml: 3 }}>
              TERMS OF USE
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
   </>
  )
}

const titleStyle = {
  fontSize: "0.8rem",
  letterSpacing: 2,
  fontWeight: 600,
  mb: 2,
};

const linkStyle = {
  fontSize: "0.8rem",
  color: "#6b7280",
  mb: 1.5,
  cursor: "pointer",
  "&:hover": { color: "#000" },
};

const bottomLinkStyle = {
  fontSize: "0.75rem",
  color: "#9ca3af",
  cursor: "pointer",
  "&:hover": { color: "#000" },
};

export default UserFooter