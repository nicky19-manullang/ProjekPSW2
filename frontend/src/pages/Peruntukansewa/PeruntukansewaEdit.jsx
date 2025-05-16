import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaEdit() {
  const { id } = useParams();
  const [jenisKegiatan, setJenisKegiatan] = useState("");
  const [peruntukanSewa, setPeruntukanSewa] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Api_URL}/${id}`);
      const data = response.data;
      setJenisKegiatan(data.jenisKegiatan);
      setPeruntukanSewa(data.peruntukanSewa);
      setKeterangan(data.keterangan);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Gagal mengambil data");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, {
        jenisKegiatan,
        peruntukanSewa,
        keterangan,
      });
      alert("Data berhasil diperbarui!");
      navigate("/peruntukansewa");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Gagal memperbarui data");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "'Poppins', sans-serif" }}>
      <h2>Edit Data Peruntukan Sewa</h2>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default PeruntukansewaEdit;
