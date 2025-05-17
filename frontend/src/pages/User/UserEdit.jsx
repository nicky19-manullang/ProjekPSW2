import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const Api_URL = "http://127.0.0.1:8000/api/v1/users";

function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    token: "",
    keterangan: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${Api_URL}/${id}`);
        const userData = response.data.data;
        setFormData({
          username: userData.username,
          password: "", // Password is empty by default for security
          email: userData.email,
          token: userData.token || "",
          keterangan: userData.keterangan || ""
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error fetching user data',
        });
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Only send password if it's not empty
      const dataToSend = formData.password 
        ? formData 
        : { ...formData, password: undefined };
      
      const response = await axios.put(`${Api_URL}/${id}`, dataToSend);
      if (response.data.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'User updated successfully',
        }).then(() => {
          navigate('/users-index');
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please check your input',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error updating user',
        });
      }
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Edit User</h1>
          <button 
            onClick={() => navigate("/users-index")}
            style={{ backgroundColor: "#e2e8f0", color: "#64748b", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", outline: "none" }}
              required
            />
            {errors.username && <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.username[0]}</span>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Password (Leave empty to keep current)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", outline: "none" }}
              placeholder="Leave blank to keep current password"
            />
            {errors.password && <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.password[0]}</span>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", outline: "none" }}
              required
            />
            {errors.email && <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.email[0]}</span>}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Token</label>
            <input
              type="text"
              name="token"
              value={formData.token}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", outline: "none" }}
            />
            {errors.token && <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.token[0]}</span>}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Keterangan</label>
            <input
              type="text"
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", outline: "none" }}
            />
            {errors.keterangan && <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.keterangan[0]}</span>}
          </div>

          <button 
            type="submit"
            style={{ width: "100%", backgroundColor: "#4361ee", color: "white", padding: "12px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;