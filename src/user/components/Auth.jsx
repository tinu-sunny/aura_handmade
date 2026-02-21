import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { contextState } from "../../context/ContextApiState";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
  // context api call
  const { open, auth, setOpen, setAuth } = useContext(contextState);

  //   usestates
  // const [,]=useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setAuth(true);
  };
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

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{ mb: 1, display: "flex", justifyContent: "center" }}
          >
            {auth ? (
              <strong>login Here..</strong>
            ) : (
              <strong>Register Here..</strong>
            )}
          </Typography>
          <Box sx={{ backgroundColor: "#dca300", height: "2px", mb: 2 }} />

          <Typography sx={{ mb: 3, textAlign: "center" }}>
            {auth ? (
              <>
                Welcome back 👋 <br />
                Log in to access your exclusive collections.
                <br />
                <span
                  style={{ color: "#000", cursor: "pointer", fontWeight: 600 }}
                  onClick={() => setAuth(false)}
                >
                  New here?{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "blue",
                      px: 0.5,
                      borderRadius: 1,
                      transition: "0.3s",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "blue",
                      },
                    }}
                  >
                    Create an account
                  </Box>
                </span>
              </>
            ) : (
              <>
                Join us today ✨ <br />
                Unlock exclusive collections and personalized features.
                <br />
                <span
                  style={{ color: "#000", cursor: "pointer", fontWeight: 600 }}
                  onClick={() => setAuth(true)}
                >
                  Already have an account?{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "blue",
                      px: 0.5,
                      borderRadius: 1,
                      transition: "0.3s",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "blue",
                      },
                    }}
                  >
                    {" "}
                    Login
                  </Box>
                </span>
              </>
            )}
          </Typography>

          {auth ? (
            <div>
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          ) : (
            <div>
              <TextField label="Full Name" fullWidth margin="normal" />

              <TextField
                label="Email Address"
                type="email"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          )}

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#dca100c0",
              "&:hover": { backgroundColor: "#dca300" },
            }}
          >
            {auth ? "Login" : "Sign up"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Auth;
