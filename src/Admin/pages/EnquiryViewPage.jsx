import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { Box, Button, Divider, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import TableWithPagenation from '../components/TableWithPagenation';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function EnquiryViewPage() {
      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>
    
    {/* admin Header</> */}
 <AdminSidebar/>
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
   Enquiry  Management
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
    Monitor Your Handcrafted Inventory
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
    <span class="iconoir--import" ></span> Download
    </Button>
  </Box>
   </Box>

  <Box sx={{ width: '100%' }}>
      <Box  sx={{
    borderBottom: 1,
    borderColor: "divider",
    px: 2,
  }}>
        <Tabs value={value} onChange={handleChange} aria-label="enquiry tabs"
    sx={{
      "& .MuiTabs-indicator": {
        backgroundColor: "#f4b400",
        height: 3,
      },
    }}>
          <Tab label="All Enquirys(0)" {...a11yProps(0)}  sx={{
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "15px",
        color: "#555",
        "&.Mui-selected": {
          color: "#f4b400",
        },
      }} />
          <Tab label="New" {...a11yProps(1)}  sx={{
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "15px",
        color: "#555",
        "&.Mui-selected": {
          color: "#f4b400",
        },
      }} />
          <Tab label="Resolved" {...a11yProps(2)}  sx={{
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "15px",
        color: "#555",
        "&.Mui-selected": {
          color: "#f4b400",
        },
      }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      {/* Table For all enquiry view  */}
<Box  >
      <Box  sx={{mb:5}} >
        <Typography variant="h5"
      sx={{
        fontWeight: "bold",
        color: "#333",
        position: "relative",
        "&::after": {
          content: '""',
          width: "50px",
          height: "4px",
          backgroundColor: "#f4b400",
          position: "absolute",
          bottom: "-6px",
          left: 0,
          borderRadius: 2,
        },
      }}>All Enquiry </Typography>
    </Box>
 
  <TableWithPagenation/>
</Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     {/* Table For new  Enquiry view  */}
<Box  >
    <Box  sx={{mb:5}} >
        <Typography  variant="h5"
      sx={{
        fontWeight: "bold",
        color: "#333",
        position: "relative",
        "&::after": {
          content: '""',
          width: "50px",
          height: "4px",
          backgroundColor: "#f4b400",
          position: "absolute",
          bottom: "-6px",
          left: 0,
          borderRadius: 2,
        },
      }}>New</Typography>
    </Box>
 
  <TableWithPagenation/>
</Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      {/* Table For product view  */}
<Box   >
       <Box sx={{mb:5}} >
        <Typography  variant="h5"
      sx={{
        fontWeight: "bold",
        color: "#333",
        position: "relative",
        "&::after": {
          content: '""',
          width: "50px",
          height: "4px",
          backgroundColor: "#f4b400",
          position: "absolute",
          bottom: "-6px",
          left: 0,
          borderRadius: 2,
        },
      }}>Resloved</Typography>
    </Box>
    
  <TableWithPagenation/>
</Box>
      </CustomTabPanel>
    </Box>



   {/* top box end */}
</Box>

    {/* Admin Footer */}

    <AdminFooter/>
    </>
  )
}

export default EnquiryViewPage