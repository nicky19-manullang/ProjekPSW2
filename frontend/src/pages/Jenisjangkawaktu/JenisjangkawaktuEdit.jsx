import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-jangka-waktu";

function JenisjangkawaktuEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jenisJangkaWaktu: "",
    keterangan: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_URL}/${id}`);
        setFormData(response.data.data); // Pastikan response struktur { data: { jenisJangkaWaktu: "...", keterangan: "..." } }
      } catch (error) {
        console.error('Error:', error.response?.data);
        alert(`Gagal mengambil data: ${error.response?.data?.message || error.message}`);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, formData); // Langsung kirim JSON (ga perlu FormData)
      alert("Data berhasil diupdate!");
      navigate("/Jenisjangkawaktu-index");
    } catch (error) {
      console.error('Error:', error.response?.data);
      alert(`Gagal: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <button 
          onClick={() => navigate(-1)}
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", cursor: "pointer", color: "#4361ee" }}
        >
          <FaChevronLeft /> Kembali
        </button>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Edit Jenis Jangka Waktu</h1>
        <div style={{ width: "100px" }}></div> {/* Spacer biar seimbang */}
      </div>

      {/* Form */}
      <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", maxWidth: "600px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          {/* Jenis Jangka Waktu */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>Jenis Jangka Waktu</label>
            <input
              type="text"
              name="jenisJangkaWaktu"
              value={formData.jenisJangkaWaktu}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* Keterangan */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>Keterangan</label>
            <input
              type="text"
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
            <button
              type="button"
              onClick={() => navigate("/Jenisjangkawaktu-index")}
              style={{ padding: "10px 20px", backgroundColor: "#f1f5f9", color: "#64748b", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500" }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{ padding: "10px 20px", backgroundColor: "#4361ee", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500" }}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JenisjangkawaktuEdit;