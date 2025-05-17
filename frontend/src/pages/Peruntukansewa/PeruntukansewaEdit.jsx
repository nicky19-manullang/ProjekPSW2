import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    jenisKegiatan: "",
    peruntukanSewa: "",
    keterangan: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Api_URL}/${id}`);
      setForm({
        jenisKegiatan: response.data.jenisKegiatan || "",
        peruntukanSewa: response.data.peruntukanSewa || "",
        keterangan: response.data.keterangan || "",
      });
    } catch (error) {
      alert("Gagal mengambil data");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, form);
      alert("Data berhasil diperbarui");
      navigate("/Peruntukansewa-index");
    } catch (error) {
      alert("Gagal memperbarui data");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "'Poppins', sans-serif" }}>
      <h2>Edit Peruntukan Sewa</h2>
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

        <button
          type="submit"
          style={{
            backgroundColor: "#4361ee",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Simpan Perubahan
        </button>
        <button
          type="button"
          onClick={() => navigate("/Peruntukansewa-index")}
          style={{
            marginLeft: 10,
            padding: "10px 20px",
            borderRadius: 6,
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
}

export default PeruntukansewaEdit;
