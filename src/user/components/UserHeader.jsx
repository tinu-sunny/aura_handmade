import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Auth from "./Auth";

function UserHeader() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Collections", path: "/collections" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
          color: "#000"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Left Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
             HASTHKALA
            </Typography>
          </Box>

          {/* Center Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    textTransform: "none",
                    color: "black",
                    "&.active": {
                      color: "#f4b400",
                      fontWeight: 600
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              <>
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <IconButton>
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              </>
            )}
<Auth/>
           
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default UserHeader;
