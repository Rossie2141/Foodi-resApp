import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import api from "../../api/axios"; // Your axios instance withCredentials: true
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";

const AuthGate = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    try {
      // Send username (or email) and password to your FastAPI
      const res = await api.post("/auth/login", { 
        username: data.email, 
        password: data.password 
      });
      dispatch(loginSuccess(res.data)); 
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleSignup = async (data) => {
    try {
      await api.post("/auth/signup", {
        username: data.email, // using email as username for logic
        email: data.email,
        password: data.password
      });
      alert("Account created! Please sign in.");
      setIsLogin(true);
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f8f8" }}>
      <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", width: "100%", maxWidth: "500px" }}>
        {isLogin ? (
          <LoginForm 
            onSubmit={handleLogin} 
            onToggleForm={() => setIsLogin(false)} 
          />
        ) : (
          <SignupForm 
            onSubmit={handleSignup} 
            onToggleForm={() => setIsLogin(true)} 
          />
        )}
      </div>
    </div>
  );
};

export default AuthGate;