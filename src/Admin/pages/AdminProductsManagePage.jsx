import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { Box, Button, Select, TextField, Typography,InputAdornment, MenuItem } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import TableWithPagenation from '../components/TableWithPagenation';
import AdminModal from '../components/AdminModal';
import { ViewAllProductsAdmin } from '../../services/allAPIs';

function AdminProductsManagePage() {
  const [allproducts,setAllproducts]=useState([])

  const getallProducts = async () =>{
    const response = await ViewAllProductsAdmin()
    console.log("dsds",response);
    if(response.status===200){
      const data= response.data.allproducts
      console.log("dataaaa",data);
      
      setAllproducts(data)
    }
    
  }
console.log("dsgdush");

  const handleProductUpdate = (updatedProduct) => {
    setAllproducts(prevProducts => {
      const existingIndex = prevProducts.findIndex(product => product._id === updatedProduct._id);
      
      if (existingIndex >= 0) {
        // Update existing product
        const newProducts = [...prevProducts];
        newProducts[existingIndex] = updatedProduct;
        return newProducts;
      } else {
        // Add new product
        return [updatedProduct, ...prevProducts];
      }
    });
  };

  useEffect(()=>{
    getallProducts()
  },[])
  return (
  <>
  <AdminSidebar/>
    
{/* body */}
{/* top body box */}
<Box sx={{m:{xs:2,md:5,lg:5}}}>
   
   {/* heading + add product button */}
   <Box sx={{ display:'flex', justifyContent:"space-between", alignItems:"center" ,m:{xs:0,md:5,lg:5}}}>
    {/* heading */}
<Box>
  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      fontSize: { xs: "20px", md: "32px" },
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
    Products Management
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontWeight: 500,
      fontSize: { xs: "15px", md: "20px" },

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
    Monitor Your Handcrafted Inventory
  </Typography>
</Box>
  {/* new product add button */}
  <Box>
  <AdminModal view={"addNewProduct"} onUpdate={handleProductUpdate}/>
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
    {/* Category */}
    <Select
      fullWidth
      defaultValue=""
      displayEmpty
      sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
    >
      <MenuItem value="">Category</MenuItem>
      <MenuItem value="decor">Home Decor</MenuItem>
      <MenuItem value="jewelry">Jewelry</MenuItem>
      <MenuItem value="art">Handcrafted Art</MenuItem>
    </Select>

    {/* Status */}
    <Select
      fullWidth
      defaultValue=""
      displayEmpty
      sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
    >
      <MenuItem value="">Status</MenuItem>
      <MenuItem value="available">Available</MenuItem>
      <MenuItem value="outofstock">Out of Stock</MenuItem>
    </Select>
  </Box>

</Box>

{/* Table For product view  */}
<Box sx={{mt:5}} >
  <TableWithPagenation products={allproducts} onUpdate={handleProductUpdate}/>
</Box>

   {/* top box end */}
</Box>





    <AdminFooter/>
    </>
 
  )
}

export default AdminProductsManagePage