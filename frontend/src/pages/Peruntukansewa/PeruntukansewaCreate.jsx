import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaCreate() {
  const [jenisKegiatan, setJenisKegiatan] = useState("");
  const [peruntukanSewa, setPeruntukanSewa] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, { jenisKegiatan, peruntukanSewa, keterangan });
      alert("Data berhasil ditambahkan!");
      navigate("/peruntukansewa");
    } catch (error) {
      console.error("Error creating data:", error);
      alert("Gagal menambahkan data");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "'Poppins', sans-serif" }}>
      <h2>Tambah Data Peruntukan Sewa</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
        <label>
          Jenis Kegiatan:
          <input
            type="text"
            value={jenisKegiatan}
            onChange={(e) => setJenisKegiatan(e.target.value)}
            required
            style={{ width: "100%", padding: 8, margin: "8px 0" }}
          />
        </label>
        <label>
          Peruntukan Sewa:
          <input
            type="text"
            value={peruntukanSewa}
            onChange={(e) => setPeruntukanSewa(e.target.value)}
            required
            style={{ width: "100%", padding: 8, margin: "8px 0" }}
          />
        </label>
        <label>
          Keterangan:
          <textarea
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
            style={{ width: "100%", padding: 8, margin: "8px 0" }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#4361ee",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default PeruntukansewaCreate;
