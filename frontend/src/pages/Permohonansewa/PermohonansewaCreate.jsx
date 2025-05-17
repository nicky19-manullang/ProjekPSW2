import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/permohonan-sewa";

const PermohonansewaCreate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    idJenisPermohonan: "",
    nomorSuratPermohonan: "",
    tanggalPengajuan: "",
    idWajibRetribusi: "",
    idObjekRetribusi: "",
    idJenisJangkaWaktu: "",
    lamaSewa: "",
    idPeruntukanSewa: "",
    idStatus: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, form);
      alert("Data berhasil ditambahkan");
      navigate("/Permohonansewa-index");
    } catch (error) {
      alert("Gagal menambahkan data");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <h2>Tambah Permohonan Sewa</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        {Object.keys(form).map((key) => (
          <div key={key} style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "600" }}>
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={key === "tanggalPengajuan" ? "date" : "text"}
              name={key}
              value={form[key]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            backgroundColor: "#4361ee",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={() => navigate("/Permohonansewa-index")}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "6px",
            border: "1px solid #4361ee",
            backgroundColor: "white",
            color: "#4361ee",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Batal
        </button>
      </form>
    </div>
  );
};

export default PermohonansewaCreate;
