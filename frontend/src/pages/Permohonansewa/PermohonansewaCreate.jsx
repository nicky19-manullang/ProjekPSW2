import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/permohonan-sewa";

function PermohonanSewaCreate() {
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, form);
      alert("Data berhasil ditambahkan");
      navigate("/permohonan-sewa-index");
    } catch (error) {
      alert("Gagal menambahkan data");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <h2>Tambah Data Permohonan Sewa</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        {Object.keys(form).map((key) => (
          <div key={key} style={{ marginBottom: "15px" }}>
            <label
              htmlFor={key}
              style={{ display: "block", marginBottom: "5px", fontWeight: "600" }}
            >
              {key}
            </label>
            <input
              type={key === "tanggalPengajuan" ? "date" : "text"}
              id={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
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
      </form>
    </div>
  );
}

export default PermohonanSewaCreate;
 