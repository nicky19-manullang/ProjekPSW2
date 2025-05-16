import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/lokasi-objek-retribusi";

function LokasiobjekEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    LokasiObjekRetribusi: "",
    keterangan: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_URL}/${id}`);
        setFormData({
          LokasiObjekRetribusi: response.data.data.LokasiObjekRetribusi,
          keterangan: response.data.data.keterangan || ""
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/lokasi-objek-retribusi');
      }
    };

    fetchData();
  }, [id, navigate]);

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
      const response = await axios.put(`${Api_URL}/${id}`, formData);
      if (response.data.status === 'success') {
        navigate('/lokasi-objek-retribusi');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error updating data:', error);
        alert('Gagal mengupdate data: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Edit Lokasi Objek Retribusi</h1>
          <button 
            onClick={() => navigate("/lokasi-objek-retribusi")}
            style={{ backgroundColor: "#e2e8f0", color: "#64748b", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Lokasi Objek Retribusi*</label>
            <input
              type="text"
              name="LokasiObjekRetribusi"
              value={formData.LokasiObjekRetribusi}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.LokasiObjekRetribusi ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none" 
              }}
              required
            />
            {errors.LokasiObjekRetribusi && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.LokasiObjekRetribusi[0]}</span>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Keterangan</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: "1px solid #e2e8f0", 
                outline: "none",
                minHeight: "100px"
              }}
            />
            {errors.keterangan && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.keterangan[0]}</span>
            )}
          </div>

          <button 
            type="submit"
            style={{ width: "100%", backgroundColor: "#4361ee", color: "white", padding: "12px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default LokasiobjekEdit;