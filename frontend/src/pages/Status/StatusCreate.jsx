import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StatusCreate() {
  const [form, setForm] = useState({
    idJenisStatus: "",
    namaStatus: "",
    keterangan: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/status", form);
      navigate("/status");
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tambah Status</h2>
      <form onSubmit={handleSubmit}>
        <label>ID Jenis Status</label>
        <input
          type="text"
          name="idJenisStatus"
          value={form.idJenisStatus}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Nama Status</label>
        <input
          type="text"
          name="namaStatus"
          value={form.namaStatus}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Keterangan</label>
        <textarea
          name="keterangan"
          value={form.keterangan}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: "80px" }}
        />

        <button type="submit" style={buttonStyle}>Simpan</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0 20px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#4361ee",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
  cursor: "pointer"
};

export default StatusCreate;
