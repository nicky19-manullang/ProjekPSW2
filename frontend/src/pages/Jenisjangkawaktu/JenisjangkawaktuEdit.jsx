import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/jenis-jangka-waktu";

function JenisjangkawaktuEdit() {
  const { id } = useParams();
  const [jenisJangkaWaktu, setJenisJangkaWaktu] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${Api_URL}/${id}`);
      setJenisJangkaWaktu(res.data.jenisJangkaWaktu);
      setKeterangan(res.data.keterangan);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, { jenisJangkaWaktu, keterangan });
      navigate("/jenisjangkawaktu");
    } catch (error) {
      console.error("Gagal mengupdate data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ marginBottom: "20px", color: "#1e293b" }}>Edit Jenis Jangka Waktu</h2>
      <form onSubmit={handleUpdate} style={{ maxWidth: "500px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Jenis Jangka Waktu:</label>
          <input
            type="text"
            value={jenisJangkaWaktu}
            onChange={(e) => setJenisJangkaWaktu(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #cbd5e1"
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Keterangan:</label>
          <input
            type="text"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #cbd5e1"
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default JenisjangkawaktuEdit;
