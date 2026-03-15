import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { Box, Button, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import TableWithPagenation from '../components/TableWithPagenation';
function CustomerDetailsViewPage() {
  return (
   
    <>
    {/* admin header  */}
    <AdminSidebar/>

{/* top body box */}
<Box sx={{m:5}}>
   
   {/* heading + add product button */}
   <Box sx={{ display:'flex', justifyContent:"space-between", alignItems:"center" ,m:5}}>
    {/* heading */}
<Box>
  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      fontSize: { xs: "24px", md: "32px" },
      color: "#f4b400",
      animation: "fadeSlide 1s ease-in-out",
      "@keyframes fadeSlide": {
        "0%": {
          opacity: 0,
          transform: "translateY(20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
    }}
  >
   All Customer  
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontWeight: 500,
      color: "#555",
      mt: 0.5,
      animation: "fadeSlide 1.4s ease-in-out",
      "@keyframes fadeSlide": {
        "0%": {
          opacity: 0,
          transform: "translateY(20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
    }}
  >
   Manage And  Monitor Your client 
  </Typography>
</Box>
  {/* new product add button */}
  <Box>
    <Button variant='contained' sx={{backgroundColor:"#f4b400",color:"black",  animation: "fadeSlide 1.4s ease-in-out",
      "@keyframes fadeSlide": {
        "0%": {
          opacity: 0,
          transform: "translateY(20px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}}>
    <span class="iconoir--import" ></span>  Download
    </Button>
  </Box>
   </Box>

   {/* Search and sort  */}


<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 3,
    p: 2,
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow: 2
  }}
>

  {/* 🔍 Search Section (70%) */}
  <Box sx={{ width: { xs: "100%", md: "70%" } }}>
    <TextField
      fullWidth
      placeholder="Search products..."
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#777" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 2
      }}
    />
  </Box>

  {/* ⚙ Filters (30%) */}
  <Box
    sx={{
      width: { xs: "100%", md: "30%" },
      display: "flex",
      gap: 2
    }}
  >
    {/* Loaction */}
    <Select
      fullWidth
      defaultValue=""
      displayEmpty
      sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
    >
      <MenuItem value="" disabled>Loaction</MenuItem>
      <MenuItem value="aisa">Asia</MenuItem>
      <MenuItem value="india">India</MenuItem>
   
    </Select>

   
  </Box>

</Box>
{/* Table For product view  */}
<Box sx={{mt:5}} >
  <TableWithPagenation/>
</Box>

   {/* top box end */}
</Box>




    {/* Admin footer */}

    <AdminFooter/>
    </>
  )
}

export default CustomerDetailsViewPage