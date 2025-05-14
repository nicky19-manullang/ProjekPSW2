import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa";

const Api_URL = "http://127.0.0.1:8000/api/v1/wajib-retribusi";

function WajibretribusiEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_jenis_retribusi: "",
    nama: "",
    pekerjaan: "",
    email: "",
    no_hp: "",
    no_wa: "",
    nik: "",
    alamat: "",
    file_foto: "",
    id_wajib_retribusi: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_URL}/${id}`);
        setFormData(response.data.data);
      } catch (error) {
        console.error('Error:', error.response?.data);
      }
    };
    fetchData();
  }, [id]);

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
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }
      await axios.put(`${Api_URL}/${id}`, formDataToSend);
      alert("Data berhasil diupdate!");
      navigate("/wajib-retribusi-index");
    } catch (error) {
      console.error('Error:', error.response?.data);
      alert(`Gagal: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <button 
          onClick={() => navigate(-1)}
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", cursor: "pointer", color: "#4361ee" }}
        >
          <FaChevronLeft /> Kembali
        </button>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Edit Wajib Retribusi</h1>
        <div style={{ width: "100px" }}></div>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", maxWidth: "600px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          {/* ID Jenis Retribusi */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>ID Jenis Retribusi</label>
            <input
              type="number"
              name="id_jenis_retribusi"
              value={formData.id_jenis_retribusi}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* Nama */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* Pekerjaan */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>Pekerjaan</label>
            <input
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* No HP */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>No HP</label>
            <input
              type="text"
              name="no_hp"
              value={formData.no_hp}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* No WA */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>No WA</label>
            <input
              type="text"
              name="no_wa"
              value={formData.no_wa}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* NIK */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>NIK</label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* Alamat */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>Alamat</label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* ID Wajib Retribusi */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>ID Wajib Retribusi</label>
            <input
              type="text"
              name="id_wajib_retribusi"
              value={formData.id_wajib_retribusi}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
            />
          </div>

          {/* File Foto */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#334155" }}>File Foto</label>
            <input
              type="file"
              name="file_foto"
              onChange={handleFileChange}
              style={{ width: "100%", padding: "10px 15px", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "14px" }}
              accept="image/*"
            />
            {formData.file_foto && typeof formData.file_foto === 'string' && (
              <p style={{ marginTop: "5px", fontSize: "12px", color: "#64748b" }}>File saat ini: {formData.file_foto}</p>
            )}
          </div>
          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
            <button
              type="button"
              onClick={() => navigate("/wajib-retribusi-index")}
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

export default WajibretribusiEdit;