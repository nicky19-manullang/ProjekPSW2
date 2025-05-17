import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/permohonan-sewa";

const PermohonansewaEdit = () => {
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
    fetchPermohonan();
  }, []);

  const fetchPermohonan = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      setForm({
        idJenisPermohonan: response.data.idJenisPermohonan || "",
        nomorSuratPermohonan: response.data.nomorSuratPermohonan || "",
        tanggalPengajuan: response.data.tanggalPengajuan || "",
        idWajibRetribusi: response.data.idWajibRetribusi || "",
        idObjekRetribusi: response.data.idObjekRetribusi || "",
        idJenisJangkaWaktu: response.data.idJenisJangkaWaktu || "",
        lamaSewa: response.data.lamaSewa || "",
        idPeruntukanSewa: response.data.idPeruntukanSewa || "",
        idStatus: response.data.idStatus || "",
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
      await axios.put(`${API_URL}/${id}`, form);
      alert("Data berhasil diperbarui");
      navigate("/Permohonansewa-index");
    } catch (error) {
      alert("Gagal memperbarui data");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <h2>Edit Permohonan Sewa</h2>
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
          Simpan Perubahan
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

export default PermohonansewaEdit;
