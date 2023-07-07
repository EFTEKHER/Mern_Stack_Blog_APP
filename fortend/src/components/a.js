import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import axios from 'axios';
import "./auth.css";
import Clock from "react-simple-clock";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
const Auth = () => {
    const naviagte = useNavigate();
    const dispath = useDispatch();
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const sendRequest = async (type = "login") => {
      const res = await axios
        .post(`http://localhost:5000/api/user/${type}`, {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        })
        .catch((err) => console.log(err));
  
      const data = await res.data;
      console.log(data);
      return data;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      if (isSignup) {
        sendRequest("signup")
          .then((data) => localStorage.setItem("userId", data.user._id))
          .then(() => dispath(authActions.login()))
          .then(() => naviagte("/blogs"));
      } else {
        sendRequest()
          .then((data) => localStorage.setItem("userId", data.user._id))
          .then(() => dispath(authActions.login()))
          .then(() => naviagte("/blogs"));
      }
    };
  
  return (
    <div className="loginscreen">
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={8}
          borderRadius={5}
          color={grey}
        >
          <Clock
            live={true}
            hourMarkFormat="none"
            className="your-class"
            mode="dark"
          />
          <Typography variant="h3" padding={3} textAlign={"center"}>
            {isSignup ? "SignUp":"LogIn"}
          </Typography>
        {
        isSignup &&   <TextField name="name" placeholder="Name" onChange={handleChange} value={inputs.name} margin="normal" />
        }
          <TextField name="email" onChange={handleChange} value={inputs.email} placeholder="Email" type={"email"} margin="normal" />
          <TextField  name="password" onChange={handleChange} value={inputs.password} placeholder="Password" type="password" margin="normal"  />
          <Button type="submit"
            sx={{ width: 200, borderRadius: 3, padding: 1, marginTop: 3 }}
            color="error"
            variant="contained"
          >
            Submit
          </Button>
          <Button onClick={()=>setIsSignup(!isSignup)}
            sx={{ width: 200, borderRadius: 3, padding: 1, marginTop: 3 }}
            color="success"
            variant="contained"
          >
            Change to {isSignup? "Login" :"SignUp"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
