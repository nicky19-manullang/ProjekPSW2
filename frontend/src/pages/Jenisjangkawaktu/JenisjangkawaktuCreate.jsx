import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-jangka-waktu";

function JenisJangkaWaktuCreate() {
  const [formData, setFormData] = useState({
    jenisJangkaWaktu: "",
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
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await axios.post(Api_URL, formDataToSend);
      alert("Data berhasil ditambahkan!");
      navigate("/Jenisjangkawaktu-index");
    } catch (error) {
      console.error('Error:', error.response?.data);
      alert(`Gagal: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "40px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Tambah Jenis Jangka Waktu</h1>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)", padding: "35px", maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>Jenis Jangka Waktu</label>
            <input
              type="text"
              name="jenisJangkaWaktu"
              value={formData.jenisJangkaWaktu}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>Keterangan</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
            <button
              type="button"
              onClick={() => navigate("/jenis-jangka-waktu")}
              style={{ padding: "12px 24px", backgroundColor: "#f1f5f9", color: "#64748b", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "500", fontSize: "16px" }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{ padding: "12px 24px", backgroundColor: "#4361ee", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "500", fontSize: "16px" }}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JenisJangkaWaktuCreate;