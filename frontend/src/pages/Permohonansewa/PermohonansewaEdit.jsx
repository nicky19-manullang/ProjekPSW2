import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/permohonan-sewa";

function PermohonanSewaEdit() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Api_URL}/${id}`);
      setForm(response.data);
    } catch (error) {
      alert("Gagal memuat data");
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
      alert("Data berhasil diupdate");
      navigate("/permohonan-sewa-index");
    } catch (error) {
      alert("Gagal memperbarui data");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <h2>Edit Data Permohonan Sewa</h2>
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
              value={form[key] || ""}
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
          Update
        </button>
      </form>
    </div>
  );
}

export default PermohonanSewaEdit;
