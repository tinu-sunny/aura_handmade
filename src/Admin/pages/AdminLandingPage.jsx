import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { adminallusersview, getUser, ViewAllProductsAdmin } from '../../services/allAPIs'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaymentsIcon from "@mui/icons-material/Payments";
function AdminLandingPage() {

 const navigate = useNavigate()

 // state 
const [token ,setToken]= useState()
const [totalProducts,setTotalProducts]=useState(0)
const [allUsers,setAllUsers]=useState(0)
console.log(token);

  const getaccess = async()=>{

    try{
      const response = await getUser()
    console.log(response);
    if(response.status==200){
     
      setToken( sessionStorage.getItem('token'))
    }

    }catch(err){
      console.log(err.response);
      navigate('/')
      alert(err.response.data.message)
      
    }
    
    
  }

  
    useEffect(()=>{
      getaccess()
      const totalproducts = async () => {
    try {
      const res = await ViewAllProductsAdmin();
      const allusers = await adminallusersview();
      if(res.status==200 && allusers.status==200){
        setTotalProducts(res?.data?.allproducts?.length)
        setAllUsers( allusers.data.users.length)

      }
      console.log("response", allusers.data.users.length);
    } catch (err) {
      console.error(err);
    }
  };

  totalproducts();
    },[])
  return (

    <>
 {token ?  <div>
      <AdminSidebar/>


{/* adimin homepage data  */}
<Box>

  {/* quick view */}

    <Box sx={{ p: 4 }}>
    <Box sx={{display:"flex", justifyContent:'space-evenly', alignItems:"center",flexDirection:{xs:'column',md:'row'},gap:{xs:5,md:0}}} >
      
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #fbc02d, #f57f17)",
            borderRadius: 3,
            height:{xs:"100px",md:"120px"}, width:{xs:"80%",md:"100%"},
            p: 3,
            color: "#fff",
            boxShadow: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 8,
            },
          }}
        >
          <ShoppingCartIcon sx={{ fontSize:{xs:25,md:40} }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Total Orders
          </Typography>
          <Typography sx={{ fontSize:{xs:25,md:30} }}  variant="h4" fontWeight="bold">
            5
          </Typography>
        </Box>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #4caf50, #2e7d32)",
            borderRadius: 3,
            height:{xs:"100px",md:"120px"}, width:{xs:"80%",md:"100%"},
            p: 3,
            color: "#fff",
            boxShadow: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 8,
            },
          }}
        >
          <PeopleIcon sx={{ fontSize:{xs:25,md:40} }}  />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Total Users
          </Typography>
          <Typography sx={{ fontSize:{xs:25,md:30} }}  variant="h4" fontWeight="bold">
            {allUsers}
          </Typography>
        </Box>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #2196f3, #1565c0)",
            borderRadius: 3,
            height:{xs:"100px",md:"120px"}, width:{xs:"80%",md:"100%"},
            p: 3,
            color: "#fff",
            boxShadow: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 8,
            },
          }}
        >
          <InventoryIcon sx={{ fontSize:{xs:25,md:40} }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Products
          </Typography>
          <Typography sx={{ fontSize:{xs:25,md:30} }}  variant="h4" fontWeight="bold">
            {totalProducts}
          </Typography>
        </Box>
      </Grid>

      {/* Card 4 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #e91e63, #ad1457)",
            borderRadius: 3,
            height:{xs:"100px",md:"120px"}, width:{xs:"80%",md:"100%"},
            p: 3,
            color: "#fff",
            boxShadow: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 8,
            },
          }}
        >
          <PaymentsIcon sx={{ fontSize:{xs:25,md:40} }}  />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Enquiry
          </Typography>
          <Typography sx={{ fontSize:{xs:25,md:30} }}  variant="h4" fontWeight="bold">
            25
          </Typography>
        </Box>
      </Grid>

    </Box>
  </Box>



</Box>



      
      
      
      
  <AdminFooter/>
   </div>:""}

    </>
  )
}

export default AdminLandingPage