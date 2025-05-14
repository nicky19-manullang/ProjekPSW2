import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/v1/wajib-retribusi";

function WajibretribusiCreate() {
  const [formData, setFormData] = useState({
    id_jenis_retribusi: "",
    nama: "",
    pekerjaan: "",
    email: "",
    no_hp: "",
    no_wa: "",
    nik: "",
    alamat: "",
    file_foto: null,
    id_wajib_retribusi: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file_foto: e.target.files[0] }));
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
      navigate("/wajib-retribusi");
    } catch (error) {
      console.error('Error:', error.response?.data);
      alert(`Gagal: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "40px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Tambah Wajib Retribusi</h1>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.08)", padding: "35px", maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          {/* ID Jenis Retribusi */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>ID Jenis Retribusi</label>
            <input
              type="number"
              name="id_jenis_retribusi"
              value={formData.id_jenis_retribusi}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
            />
          </div>
            {/* Nama */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* Pekerjaan */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>Pekerjaan</label>
              <input
                type="text"
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* No HP */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>No HP</label>
              <input
                type="text"
                name="no_hp"
                value={formData.no_hp}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* No WA */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>No WA</label>
              <input
                type="text"
                name="no_wa"
                value={formData.no_wa}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* NIK */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>NIK</label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* Alamat */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>Alamat</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>

            {/* File Foto */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>File Foto</label>
              <input
                type="file"
                name="file_foto"
                onChange={handleFileChange}
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
                accept="image/*"
              />
            </div>

            {/* ID Wajib Retribusi */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "500", color: "#334155", fontSize: "16px" }}>ID Wajib Retribusi</label>
              <input
                type="text"
                name="id_wajib_retribusi"
                value={formData.id_wajib_retribusi}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "12px 18px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "16px" }}
              />
            </div>
          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}>
            <button
              type="button"
              onClick={() => navigate("/wajib-retribusi")}
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

export default WajibretribusiCreate;