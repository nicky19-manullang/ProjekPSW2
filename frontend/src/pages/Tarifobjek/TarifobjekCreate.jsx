import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/tarif-objek-retribusi";

function TarifobjekCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idObjekRetribusi: "",
    idJenisJangkaWaktu: "",
    tanggalDinilai: "",
    namaPenilai: "",
    nominalTarif: "",
    fileHasilPenilaian: "",
    keterangan: ""
  });
  const [errors, setErrors] = useState({});
  const [objekOptions, setObjekOptions] = useState([]);
  const [jangkaWaktuOptions, setJangkaWaktuOptions] = useState([]);

  useEffect(() => {
    // Fetch options for dropdowns
    const fetchOptions = async () => {
      try {
        const [objekRes, jangkaRes] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/v1/objek-retribusi"),
          axios.get("http://127.0.0.1:8000/api/v1/jenis-jangka-waktu")
        ]);
        setObjekOptions(objekRes.data.data);
        setJangkaWaktuOptions(jangkaRes.data.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(Api_URL, formData);
      if (response.data.status === 'success') {
        navigate('/Tarifobjek-index');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error creating data:', error);
        alert('Gagal membuat data: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Tambah Tarif Objek Retribusi</h1>
          <button 
            onClick={() => navigate("/Tarifobjek-index")}
            style={{ backgroundColor: "#e2e8f0", color: "#64748b", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Objek Retribusi*</label>
              <select
                name="idObjekRetribusi"
                value={formData.idObjekRetribusi}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.idObjekRetribusi ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              >
                <option value="">Pilih Objek Retribusi</option>
                {objekOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.nama}</option>
                ))}
              </select>
              {errors.idObjekRetribusi && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.idObjekRetribusi[0]}</span>
              )}
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Jenis Jangka Waktu*</label>
              <select
                name="idJenisJangkaWaktu"
                value={formData.idJenisJangkaWaktu}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.idJenisJangkaWaktu ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              >
                <option value="">Pilih Jangka Waktu</option>
                {jangkaWaktuOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.nama}</option>
                ))}
              </select>
              {errors.idJenisJangkaWaktu && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.idJenisJangkaWaktu[0]}</span>
              )}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Tanggal Dinilai*</label>
              <input
                type="date"
                name="tanggalDinilai"
                value={formData.tanggalDinilai}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.tanggalDinilai ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              />
              {errors.tanggalDinilai && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.tanggalDinilai[0]}</span>
              )}
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Nominal Tarif*</label>
              <input
                type="number"
                name="nominalTarif"
                value={formData.nominalTarif}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.nominalTarif ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              />
              {errors.nominalTarif && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.nominalTarif[0]}</span>
              )}
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Nama Penilai*</label>
            <input
              type="text"
              name="namaPenilai"
              value={formData.namaPenilai}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.namaPenilai ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none" 
              }}
              required
            />
            {errors.namaPenilai && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.namaPenilai[0]}</span>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>File Hasil Penilaian</label>
            <input
              type="text"
              name="fileHasilPenilaian"
              value={formData.fileHasilPenilaian}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: "1px solid #e2e8f0", 
                outline: "none" 
              }}
              placeholder="URL file (jika ada)"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Keterangan</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: "1px solid #e2e8f0", 
                outline: "none",
                minHeight: "100px"
              }}
            />
          </div>

          <button 
            type="submit"
            style={{ width: "100%", backgroundColor: "#4361ee", color: "white", padding: "12px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}

export default TarifobjekCreate;