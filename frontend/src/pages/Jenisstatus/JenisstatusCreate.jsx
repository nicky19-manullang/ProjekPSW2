import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/jenis-status";

function JenisstatusCreate() {
  const navigate = useNavigate();
  const [jenisStatus, setJenisStatus] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, {
        jenis_status: jenisStatus,
        keterangan: keterangan,
      });
      navigate("/jenis-status");
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Tambah Jenis Status</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Jenis Status</label>
          <input
            type="text"
            value={jenisStatus}
            onChange={(e) => setJenisStatus(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Keterangan</label>
          <input
            type="text"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "#3b82f6", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
          Simpan
        </button>
      </form>
    </div>
  );
}

export default JenisstatusCreate;
