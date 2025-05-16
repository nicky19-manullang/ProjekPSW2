import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-permohonan";

function JenispermohonanCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jenis_permohonan: "",
    parent_id: "",
    keterangan: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert("Data berhasil ditambahkan!");
      navigate("/jenis-permohonan");
    } catch (error) {
      console.error("Error creating data:", error.response?.data);
      alert(`Gagal menambahkan data! ${error.response?.data?.message || ""}`);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: 40, backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, color: "#1e293b", marginBottom: 30 }}>
        Tambah Jenis Permohonan Baru
      </h1>

      <div style={{ backgroundColor: "white", borderRadius: 12, boxShadow: "0 4px 15px rgba(0,0,0,0.08)", padding: 35, maxWidth: 800, margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          {/* Jenis Permohonan */}
          <div style={{ marginBottom: 25 }}>
            <label style={{ display: "block", marginBottom: 10, fontWeight: 500, color: "#334155", fontSize: 16 }}>
              Jenis Permohonan
            </label>
            <input
              type="text"
              name="jenis_permohonan"
              value={formData.jenis_permohonan}
              onChange={handleChange}
              required
              placeholder="Masukkan jenis permohonan"
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                fontSize: 16
              }}
            />
          </div>

          {/* Parent ID */}
          <div style={{ marginBottom: 25 }}>
            <label style={{ display: "block", marginBottom: 10, fontWeight: 500, color: "#334155", fontSize: 16 }}>
              Parent ID
            </label>
            <input
              type="number"
              name="parent_id"
              value={formData.parent_id}
              onChange={handleChange}
              placeholder="Masukkan parent ID (opsional)"
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                fontSize: 16
              }}
            />
          </div>

          {/* Keterangan */}
          <div style={{ marginBottom: 30 }}>
            <label style={{ display: "block", marginBottom: 10, fontWeight: 500, color: "#334155", fontSize: 16 }}>
              Keterangan
            </label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              placeholder="Masukkan keterangan"
              style={{
                width: "100%",
                padding: "12px 18px",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                fontSize: 16,
                minHeight: 120,
                resize: "vertical"
              }}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
            <button
              type="button"
              onClick={() => navigate("/jenis-permohonan")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#f1f5f9",
                color: "#64748b",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 16
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 16
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

export default JenispermohonanCreate;
