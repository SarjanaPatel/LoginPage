import React, { useState, useEffect } from "react";
import Rectangle1 from "./assets/Rectangle1.png";
import Rectangle4 from "./assets/Rectangle4.png";
import Rectangle17 from "./assets/Rectangle17.png";
import icon from "./assets/icon.png";
import amzlogo from "./assets/amzlogo.png";
import { AppBar, Typography, InputLabel, Input, Box, Button } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function LoginPage() {
  const loginPageStyle = {
    backgroundImage: `url(${Rectangle1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "35vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [contentStyle, setContentStyle] = useState({
    height: window.innerWidth <= 900 ? "90vh" : "90vh",
    width: window.innerWidth <= 900 ? "70vw" : "35vw",
    position: "absolute",
    bottom: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  });

  useEffect(() => {
    const handleResize = () => {
      setContentStyle({
        height: window.innerWidth <= 900 ? "90vh" : "90vh",
        width: window.innerWidth <= 900 ? "70vw" : "35vw",
        position: "absolute",
        bottom: "0",
        backgroundColor: "#FFFFFF",
        borderRadius: "6px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSignIn = () => {
    if (!email) {
      setEmailError("The email field is required");
    } else if (!isValidEmail(email)) {
      setEmailError("The email is invalid");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div style={loginPageStyle}>
      <div style={contentStyle}>
        <AppBar
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "15px 0px 10px 0px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "&.MuiPaper-elevation2": {
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            },
          }}
          position="static"
        >
          <img src={amzlogo} alt="Amazon Logo" style={{ margin: "auto", height: "23px", width: "83px" }} />
        </AppBar>
        <Typography variant="h6" sx={{ marginTop: "7px", color: "#20B716", fontWeight: "600" }}>
          Login
        </Typography>
        <img src={Rectangle4} alt="Tree" style={{ height: "100px", width: "300px", marginTop: "15px" }} />
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px", borderBottom: "1.5px solid #d9d9d9", width: "300px" }}>
          <InputLabel htmlFor="email" sx={{ flex: 1, fontSize: "14px", color: "#20B716" }}>
            Email
          </InputLabel>
          <Input id="email" type="email" disableUnderline sx={{ flex: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", transform: emailError == "The email is invalid" ? "translateX(-100px)" : "translateX(-85px)", marginTop: "2px" }}>
          {emailError && <RemoveCircleIcon sx={{ marginRight: "0px", height: "15px", color: "#ad000c" }} />}
          {emailError && <Typography sx={{ color: "#D9185F", fontSize: "10px", transform: "translate(-3px, 0.5px)" }}>{emailError}</Typography>}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: emailError ? "0px" : "15px", borderBottom: "1.5px solid #d9d9d9", width: "300px" }}>
          <InputLabel htmlFor="password" sx={{ flex: 1, fontSize: "14px", color: "#20B716" }}>
            Password
          </InputLabel>
          <Input id="password" type="password" disableUnderline sx={{ flex: 2 }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", transform: "translateX(-96px)", marginTop: "2px" }}>
          {passwordError && <RemoveCircleIcon sx={{ marginRight: "0px", height: "15px", color: "#ad000c" }} />}
          {passwordError && <Typography sx={{ color: "#D9185F", fontSize: "10px", transform: "translate(-3px, 0.5px)" }}>{passwordError}</Typography>}
        </Box>
        <Button onClick={handleSignIn} variant="contained" disableElevation sx={{ "&:hover": { backgroundColor: "#20B716" }, marginTop: "20px", backgroundColor: "#20B716", color: "#FFFFFF", width: "300px", borderRadius: "40px", textTransform: "none" }}>
          Sign In
        </Button>
        <Box sx={{ display: "flex", gap: "70px" }}>
          <Button sx={{ marginTop: "5px", color: "#000000", textTransform: "none", fontSize: "12px" }}>Forgot Password?</Button>
          <Button sx={{ marginTop: "5px", color: "#D9185F", textTransform: "none", fontSize: "12px" }}>New User? Sign Up</Button>
        </Box>
        <Typography variant="body2" sx={{ color: "#00000" }}>
          or
        </Typography>
        <Button variant="contained" disableElevation sx={{ width: "300px", height: "35px", "&:hover": { backgroundColor: "#4285F4" }, backgroundColor: "#4285F4", marginTop: "5px", color: "#FFFFFF", fontSize: "10px" }}>
          <img src={icon} alt="Google Logo" style={{ transform: "translateX(-67px)", height: "27px", width: "27px" }} />
          Continue with Google
        </Button>
        <Button variant="contained" disableElevation sx={{ width: "300px", height: "35px", "&:hover": { backgroundColor: "#1877F2" }, backgroundColor: "#1877F2", marginTop: "15px", color: "#FFFFFF", fontSize: "10px" }}>
          <img src={Rectangle17} alt="Facebook Logo" style={{ transform: "translateX(-60px)", height: "30px", width: "30px" }} />
          Continue with Facebook
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
