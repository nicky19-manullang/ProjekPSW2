import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    jenisKegiatan: "",
    peruntukanSewa: "",
    keterangan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, form);
      alert("Data berhasil ditambahkan");
      navigate("/peruntukansewa-index");
    } catch (error) {
      alert("Gagal menambahkan data");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "'Poppins', sans-serif" }}>
      <h2>Tambah Peruntukan Sewa</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, fontWeight: "600" }}>
            Jenis Kegiatan
          </label>
          <input
            type="text"
            name="jenisKegiatan"
            value={form.jenisKegiatan}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, fontWeight: "600" }}>
            Peruntukan Sewa
          </label>
          <input
            type="text"
            name="peruntukanSewa"
            value={form.peruntukanSewa}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, fontWeight: "600" }}>
            Keterangan
          </label>
          <textarea
            name="keterangan"
            value={form.keterangan}
            onChange={handleChange}
            rows={4}
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
            <button
              type="button"
              onClick={() => navigate("/Jenispermohonan-index")}
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
                backgroundColor: "#4361ee",
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
  );
}

export default PeruntukansewaCreate;
