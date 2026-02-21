import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { contextState } from "../../context/ContextApiState";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "200px", sm: "400px" },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

function Auth() {
  const {open, setOpen} = useContext(contextState) 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: "#f4b400",
          color: "#000",
          fontWeight: 600,
          px: { xs: 1.5, md: 3 },
          "&:hover": {
            backgroundColor: "#dca300",
          },
        }}
      >
        Login
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
      >
        <Box sx={style}>
            
          <Typography variant="h6" sx={{ mb: 2 }}>
            Login Required
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Please sign in to access your collections and exclusive content.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#1c1c1c",
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            Continue to Login
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Auth;