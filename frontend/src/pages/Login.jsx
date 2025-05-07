import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username dan password harus diisi!");
      return;
    }
    if (username === "admin" && password === "123456") {
      setError("");
      window.location.href = "/dashboard";
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="login-page">
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>
      
      <div className="login-box">
        <img 
          src="/images/logo.jpg" 
          alt="Logo" 
          className="logo" 
        />
        <h2 className="login-title">LOGIN</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input 
              type="text" 
              placeholder="MASUKKAN USERNAME ANDA" 
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
            />
          </div>
          
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showPass ? "text" : "password"}
              placeholder="MASUKKAN PASSWORD ANDA"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            <span className="toggle-pass" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}