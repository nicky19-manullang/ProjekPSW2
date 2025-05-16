import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/jangka-waktu-sewa";

function JangkawaktusewaCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idJenisJangkaWaktu: "",
    jangkaWaktu: "",
    keterangan: "",
    isDefault: "0"
  });
  const [errors, setErrors] = useState({});
  const [jenisOptions, setJenisOptions] = useState([]);

  useEffect(() => {
    // Fetch options for dropdown
    const fetchOptions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/jenis-jangka-waktu");
        setJenisOptions(response.data.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

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
      const response = await axios.post(Api_URL, formData);
      if (response.data.status === 'success') {
        navigate('/Jangkawaktusewa-index');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error creating data:', error);
        alert('Gagal membuat data: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Tambah Jangka Waktu Sewa</h1>
          <button 
            onClick={() => navigate("/Jangkawaktusewa-index")}
            style={{ backgroundColor: "#e2e8f0", color: "#64748b", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Jenis Jangka Waktu*</label>
            <select
              name="idJenisJangkaWaktu"
              value={formData.idJenisJangkaWaktu}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.idJenisJangkaWaktu ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none" 
              }}
              required
            >
              <option value="">Pilih Jenis Jangka Waktu</option>
              {jenisOptions.map(option => (
                <option key={option.id} value={option.id}>{option.nama}</option>
              ))}
            </select>
            {errors.idJenisJangkaWaktu && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.idJenisJangkaWaktu[0]}</span>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Jangka Waktu*</label>
            <input
              type="text"
              name="jangkaWaktu"
              value={formData.jangkaWaktu}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.jangkaWaktu ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none" 
              }}
              required
            />
            {errors.jangkaWaktu && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.jangkaWaktu[0]}</span>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Default</label>
            <select
              name="isDefault"
              value={formData.isDefault}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.isDefault ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none" 
              }}
              required
            >
              <option value="0">Tidak</option>
              <option value="1">Ya</option>
            </select>
            {errors.isDefault && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.isDefault[0]}</span>
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
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}

export default JangkawaktusewaCreate;