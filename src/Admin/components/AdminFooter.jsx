import { Box, Typography } from '@mui/material'
import React from 'react'

function AdminFooter() {
  return (
   <>
   
<Box sx={{
        backgroundColor:'#f5f5f5',
          borderTop: "1px solid #ddd",
        color: "#000",
        mt: 5,
        py: 3,
        px: 2,
      }}>
 <Typography
          variant="body2"
          sx={{
  color: "#222",
  fontWeight: 600,
  letterSpacing: 0.5,
  textAlign: "center",
}}

        >
          © 2026 HASTHKALA | Admin Dashboard. All Rights Reserved.
        </Typography>
  {/* <p>@2026 HASTHKALA.Admin Dashboard</p> */}


</Box>
  
   </>
  )
}

export default AdminFooter