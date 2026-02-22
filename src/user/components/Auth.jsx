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
import { Password } from "@mui/icons-material";
import { useEffect } from "react";
import { loginUser, userRegistration } from "../../services/allAPIs";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: "400px" },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

function Auth() {
  // context api call
  const { open, auth, setOpen, setAuth } = useContext(contextState);

  // navigation 
  
  const navigate = useNavigate();
  //   usestates
    const [token,setToken]= useState('')
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userData, setUserData] = useState(user);

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
 const [loginData,setLoginData]=useState({
  email:"",
  password:""
 })

 console.log(loginData);
 


  const handleOpen = () => {
    setOpen(true);
    setAuth(true);
  };
  const handleClose = () => setOpen(false);

// logout fuunction 

  const handleLogout =async()=>{
    sessionStorage.clear()
       window.location.reload()

  }

  useEffect(()=>{
    const tk = sessionStorage.getItem('token')
    setToken(tk)
  })
  // formvalidation registration
  const validateFormRegister = () => {
    let newErrors = {};

    if (!userData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!userData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!userData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(userData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!userData.password?.trim()) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

//  formvalidation login
const validateFormLogin = () => {
    let newErrors = {};


    if (!loginData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!loginData.password?.trim()) {
      newErrors.password = "Password is required";
    } else if (loginData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };



// Registration 
  const handleUserRegistration = async () => {
  if (!validateFormRegister()) return;

  try {
    const response = await userRegistration(userData);

    // success case (201)
    if (response.status === 201) {
      setUserData(user)
      alert(response.data.message);
    }

  } catch (err) {

    // console.log(err.response);
    
    if (err.response) {
      alert(err.response.data.message);
      setUserData(user)

    } else {
      alert("Server not responding");
    }

  }
};

// Login user

const handleUserLogin = async()=>{

  if(!validateFormLogin()) return

  try{

    const response = await loginUser(loginData)
    console.log(response);
    if(response.status===200){
      setLoginData({email:"",password:""})

      sessionStorage.setItem("token",response.data.token);
      handleClose()
      alert("login successfull")

      if( response.data.loginUser.role=="user"){
       navigate("/collections")
       window.location.reload()
      }
      
    }
    

  }

  catch(err){
    console.log(err.response);
    alert(err.response.data.message)
    
  }
}




  return (
    <>
     {token ? <div>
        <Button
          onClick={()=>{handleLogout()}}
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
          LogOut
        </Button>
      </div>: <div>
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
      </div>}

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

              value={loginData.email}
              onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}}
                label="Email Address"
                type="email"
                fullWidth
                margin="normal"
                  error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
              value={loginData.password}
              onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}

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
                  error={!!errors.password}
                helperText={errors.password}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#dca100c0",
                  "&:hover": { backgroundColor: "#dca300" },
                }}
                onClick={()=>{handleUserLogin()}}
              >
                Login
              </Button>
            </div>
          ) : (
            <div>
              <TextField
              value={userData.name}
                label="Full Name"
                fullWidth
                margin="normal"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
              value={userData.email}

                label="Email Address"
                type="email"
                fullWidth
                margin="normal"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
              value={userData.phone}

                label="Phone Number"
                type="tel"
                fullWidth
                margin="normal"
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                error={!!errors.phone}
                helperText={errors.phone}
              />

              <TextField
              value={userData.password}

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
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                error={!!errors.password}
                helperText={errors.password}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#dca100c0",
                  "&:hover": { backgroundColor: "#dca300" },
                }}
                onClick={() => {
                  handleUserRegistration();
                }}
              >
                Sign up
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default Auth;
