import React from "react";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

function ContactPage() {
  return (
    <>
      <UserHeader />

      <Box >
        <Grid  sx={{display:"flex", justifyContent:"center" ,width:"100%",height:"100%", flexDirection:{xs:"column",md:"row",lg:'row'}}}>

          {/* LEFT IMAGE SIDE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
               height:"500px",
               width:{xs:"auto",md:"500px",lg:"500px"},
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                p: { xs: 4, md: 8 },
                color: "#fff",
              }}
            >
              {/* Overlay */}
              <Box
                sx={{

                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              />

              {/* Text */}
              <Box sx={{ position: "relative", zIndex: 2 ,textAlign:"center" }}>
                {/* <Typography
                  sx={{
                    fontSize: "0.75rem",
                    letterSpacing: 3,
                    mb: 2,
                    color: "#d4af37",
                  }}
                >
                  EST. 1924
                </Typography> */}

              <Typography
  sx={{
    fontFamily: "serif",
    fontSize: { xs: "1.5rem", md: "3rem" },
    lineHeight: 1.2,
    mb: 2,
  }}
>
  We are here to assist you <br /> every step of the way.
</Typography>

<Typography sx={{ maxWidth: 400, fontSize: "0.9rem" }}>
  Experience personalized support designed to ensure complete comfort and satisfaction.
</Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT FORM SIDE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#f6f4f1",
              height:"500px",
                p: { xs: 4, md: 8 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "serif",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  mb: 2,
                }}
              >
                How can we assist you?
              </Typography>

              <Typography
                sx={{
                  color: "#b08950",
                  fontSize: "0.9rem",
                  mb: 4,
                }}
              >
                Please fill out the form below and our team will reach out
                within 24 hours.
              </Typography>

              {/* FORM */}
              <Box component="form">
                <Grid  spacing={3}>

                  {/* Name */}
                  <Grid item xs={12} md={6} >
                    <TextField
                    sx={{mt:2}}

                      label="Full Name"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} md={6}>
                    <TextField
                    sx={{mt:2,mb:2}}

                      label="Email Address"
                      variant="standard"
                      type="email"
                      fullWidth
                    />
                  </Grid>

                  {/* Inquiry */}
                  <Grid item xs={12}>
                    <TextField
                    sx={{mt:2 }}

                      select
                      label="Inquiry Type"
                      variant="standard"
                      fullWidth
                     
                    >
                       
                      <MenuItem value="general">
                        General Inquiries
                      </MenuItem>
                      <MenuItem value="order">
                        Order Support
                      </MenuItem>
                      <MenuItem value="custom">
                        Custom Styling
                      </MenuItem>
                    </TextField>
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12}>
                    <TextField
                    sx={{mt:2}}
                      label="Message"
                      variant="standard"
                      multiline
                      rows={3}
                      fullWidth
                    />
                  </Grid>

                  {/* Button */}
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{
                        mt: 2,
                        py: 1.5,
                        backgroundColor: "#1c1c1c",
                        color: "#fff",
                        borderRadius: 1,
                        "&:hover": {
                          backgroundColor: "#000",
                        },
                      }}
                    >
                      SEND REQUEST →
                    </Button>
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <UserFooter />
    </>
  );
}

export default ContactPage;