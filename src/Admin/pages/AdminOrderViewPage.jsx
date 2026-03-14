import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { Box, Button, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import TableWithPagination from '../components/TableWithPagenation';
function AdminOrderViewPage() {
  return (
  <>
  <AdminSidebar/>
   {/* Body */}

   <Box sx={{m:5}}>
{/* Heading And order download button */}

<Box>
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
    Order Management
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
  review and   Monitor Your Orders
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
    <span class="iconoir--import"></span>  Export CSV
    </Button>
  </Box>
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
    boxShadow: 2,
    mb:5
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
   {/* Status */}
    <Select
      fullWidth
      defaultValue=""
      displayEmpty
      sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
    >
      <MenuItem value="" disabled>Status</MenuItem>
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="pending">Pending</MenuItem>
      <MenuItem value="shipped">Shipped </MenuItem>
      <MenuItem value="completed">Completed </MenuItem>
    </Select>

 
  </Box>

</Box>
{/* table for  order view */}

 <TableWithPagination/>


   </Box>
    <AdminFooter/>
    </>
 
  )
}

export default AdminOrderViewPage