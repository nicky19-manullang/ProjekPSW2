import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = "http://localhost:8000/api/v1/users"; 
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
    // Kirim sebagai JSON, bukan FormData
    await axios.post(Api_URL, formData, {
      headers: {
        'Content-Type': 'application/json' // Wajib ditambah!
      }
    });
    alert("Data User berhasil ditambahkan!");
    navigate("/users-index");
  } catch (error) {
    console.error('Error adding user:', error.response?.data); // Log error detail
    alert(`Gagal menambahkan data! ${error.response?.data?.message}`);
  }
};

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      padding: "40px",
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      <div style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        <h1 style={{ 
          fontSize: "24px",
          fontWeight: "600",
          color: "#1e293b"
        }}>Tambah User</h1>
      </div>

      <div style={{ 
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        padding: "35px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px"
              }}
              placeholder="Masukkan Username"
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px"
              }}
              placeholder="Masukkan Password"
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px"
              }}
              placeholder="Masukkan Email"
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Token</label>
            <input
              type="text"
              name="token"
              value={formData.token}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px"
              }}
              placeholder="Masukkan Token"
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Keterangan</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                minHeight: "100px",
                resize: "vertical"
              }}
              placeholder="Masukkan Keterangan"
            />
          </div>

          <div style={{ 
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px"
          }}>
            <button
              type="button"
              onClick={() => navigate("/users-index")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#f1f5f9",
                color: "#64748b",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "16px"
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                backgroundColor: "#4361ee",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "16px",
                transition: "background 0.2s"
              }}
            >
              Tambahkan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;