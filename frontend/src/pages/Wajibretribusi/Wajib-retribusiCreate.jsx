// UserCreate.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/users";

function UserCreate() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    token: "",
    keterangan: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, formData);
      alert("User berhasil ditambahkan!");
      navigate("/users"); // Redirect ke list user setelah submit
    } catch (error) {
      console.error('Error adding user:', error);
      alert("Gagal menambahkan user!");
    }
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h1 style={{ 
          fontSize: "24px",
          fontWeight: "600",
          color: "#1e293b"
        }}>Tambah User Baru</h1>
      </div>

      {/* Form */}
      <div style={{ 
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        padding: "25px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px",
                transition: "border 0.2s",
                outline: "none",
                boxSizing: "border-box"
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Token */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Token</label>
            <input
              type="text"
              name="token"
              value={formData.token}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Keterangan */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Keterangan</label>
            <input
              type="text"
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ 
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px"
          }}>
            <button
              type="button"
              onClick={() => navigate("/User-index")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f1f5f9",
                color: "#64748b",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500"
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4361ee",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "background 0.2s"
              }}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;