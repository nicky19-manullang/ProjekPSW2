import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/jenis-permohonan";

function JenispermohonanCreate() {
  const [formData, setFormData] = useState({
    id_jenis_permohonan: "",
    jenis_permohonan: "",
    parent_id: "",
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
      alert("Jenis Permohonan berhasil ditambahkan!");
      navigate("/jenis-permohonan");
    } catch (error) {
      console.error('Error adding jenis permohonan:', error);
      alert("Gagal menambahkan data!");
    }
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      padding: "40px",
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header */}
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
        }}>Tambah Jenis Permohonan</h1>
      </div>

      {/* Form */}
      <div style={{ 
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        padding: "35px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <form onSubmit={handleSubmit}>
          {/* ID Jenis Permohonan */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>ID Jenis Permohonan</label>
            <input
              type="text"
              name="id_jenis_permohonan"
              value={formData.id_jenis_permohonan}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "border 0.2s",
                outline: "none"
              }}
              placeholder="Masukkan ID jenis permohonan"
            />
          </div>

          {/* Jenis Permohonan */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Jenis Permohonan</label>
            <input
              type="text"
              name="jenis_permohonan"
              value={formData.jenis_permohonan}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "border 0.2s",
                outline: "none"
              }}
              placeholder="Masukkan jenis permohonan"
            />
          </div>

          {/* Parent ID */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#334155",
              fontSize: "16px"
            }}>Parent ID</label>
            <input
              type="text"
              name="parent_id"
              value={formData.parent_id}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px"
              }}
              placeholder="Masukkan parent ID (opsional)"
            />
          </div>

          {/* Keterangan */}
          <div style={{ marginBottom: "30px" }}>
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
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                minHeight: "120px",
                resize: "vertical"
              }}
              placeholder="Masukkan keterangan"
            />
          </div>

          {/* Submit Button */}
          <div style={{ 
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px"
          }}>
            <button
              type="button"
              onClick={() => navigate("/jenis-permohonan")}
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

export default JenispermohonanCreate; 