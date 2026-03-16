import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TableWithPagenation from "../components/TableWithPagenation";
import { adminallusersview } from "../../services/allAPIs";

function CustomerDetailsViewPage() {

  const [allUsers, setAllUsers] = useState([]);

  const viewAllcustomer = async () => {
    try {
      const response = await adminallusersview();

      if (response.status === 200) {
        const users = response.data.result;
        setAllUsers(users);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    viewAllcustomer();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <AdminSidebar />

      <Box sx={{ m: 5 }}>

        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 5,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "32px" },
                color: "#f4b400",
              }}
            >
              All Customer
            </Typography>

            <Typography variant="body1" sx={{ color: "#555", mt: 0.5 }}>
              Manage And Monitor Your Client
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#f4b400", color: "black" }}
          >
            <span className="iconoir--import"></span> Download
          </Button>
        </Box>

        {/* Search + Filter */}
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
          }}
        >
          {/* Search */}
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <TextField
              fullWidth
              placeholder="Search customers..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#777" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
            />
          </Box>

          {/* Filter */}
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              display: "flex",
              gap: 2,
            }}
          >
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
            >
              <MenuItem value="" disabled>
                Location
              </MenuItem>
              <MenuItem value="asia">Asia</MenuItem>
              <MenuItem value="india">India</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Table */}
        <Box sx={{ mt: 5 }}>
          <TableWithPagenation users={allUsers} />
        </Box>
      </Box>

      {/* Footer */}
      <AdminFooter />
    </>
  );
}

export default CustomerDetailsViewPage;