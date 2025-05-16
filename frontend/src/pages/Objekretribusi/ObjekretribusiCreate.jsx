import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/objek-retribusi";

function ObjekretribusiCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idLokasiObjekRetribusi: "",
    idJenisObjekRetribusi: "",
    kodeObjekRetribusi: "",
    noBangunan: "",
    jumlahLantai: "",
    objekRetribusi: "",
    panjangTanah: "",
    lebarTanah: "",
    luasTanah: "",
    panjangBangunan: "",
    lebarBangunan: "",
    luasBangunan: "",
    alamat: "",
    latitute: "",
    longitute: "",
    keterangan: "",
    gambarDenahTanah: ""
  });
  const [errors, setErrors] = useState({});
  const [lokasiOptions, setLokasiOptions] = useState([]);
  const [jenisOptions, setJenisOptions] = useState([]);

  useEffect(() => {
    // Fetch options for dropdowns
    const fetchOptions = async () => {
      try {
        const [lokasiRes, jenisRes] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/v1/lokasi-objek-retribusi"),
          axios.get("http://127.0.0.1:8000/api/v1/jenis-objek-retribusi")
        ]);
        setLokasiOptions(lokasiRes.data.data);
        setJenisOptions(jenisRes.data.data);
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
        navigate('/Objekretribusi-index');
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
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Tambah Objek Retribusi</h1>
          <button 
            onClick={() => navigate("/Objekretribusi-index")}
            style={{ backgroundColor: "#e2e8f0", color: "#64748b", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Lokasi Objek Retribusi*</label>
              <select
                name="idLokasiObjekRetribusi"
                value={formData.idLokasiObjekRetribusi}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.idLokasiObjekRetribusi ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              >
                <option value="">Pilih Lokasi</option>
                {lokasiOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.LokasiObjekRetribusi}</option>
                ))}
              </select>
              {errors.idLokasiObjekRetribusi && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.idLokasiObjekRetribusi[0]}</span>
              )}
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Jenis Objek Retribusi*</label>
              <select
                name="idJenisObjekRetribusi"
                value={formData.idJenisObjekRetribusi}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.idJenisObjekRetribusi ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              >
                <option value="">Pilih Jenis</option>
                {jenisOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.jenisObjekRetribusi}</option>
                ))}
              </select>
              {errors.idJenisObjekRetribusi && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.idJenisObjekRetribusi[0]}</span>
              )}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Kode Objek Retribusi*</label>
              <input
                type="text"
                name="kodeObjekRetribusi"
                value={formData.kodeObjekRetribusi}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: errors.kodeObjekRetribusi ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                  outline: "none" 
                }}
                required
              />
              {errors.kodeObjekRetribusi && (
                <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.kodeObjekRetribusi[0]}</span>
              )}
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>No. Bangunan</label>
              <input
                type="text"
                name="noBangunan"
                value={formData.noBangunan}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Nama Objek Retribusi*</label>
            <input
              type="text"
              name="objekRetribusi"
              value={formData.objekRetribusi}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.objekRetribusi ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none" 
              }}
              required
            />
            {errors.objekRetribusi && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.objekRetribusi[0]}</span>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Panjang Tanah (m)</label>
              <input
                type="number"
                step="0.01"
                name="panjangTanah"
                value={formData.panjangTanah}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Lebar Tanah (m)</label>
              <input
                type="number"
                step="0.01"
                name="lebarTanah"
                value={formData.lebarTanah}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Luas Tanah (m²)</label>
              <input
                type="number"
                step="0.01"
                name="luasTanah"
                value={formData.luasTanah}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Panjang Bangunan (m)</label>
              <input
                type="number"
                step="0.01"
                name="panjangBangunan"
                value={formData.panjangBangunan}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Lebar Bangunan (m)</label>
              <input
                type="number"
                step="0.01"
                name="lebarBangunan"
                value={formData.lebarBangunan}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Luas Bangunan (m²)</label>
              <input
                type="number"
                step="0.01"
                name="luasBangunan"
                value={formData.luasBangunan}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Alamat*</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: errors.alamat ? "1px solid #ef4444" : "1px solid #e2e8f0", 
                outline: "none",
                minHeight: "80px"
              }}
              required
            />
            {errors.alamat && (
              <span style={{ color: "#ef4444", fontSize: "14px" }}>{errors.alamat[0]}</span>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Latitude</label>
              <input
                type="text"
                name="latitute"
                value={formData.latitute}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Longitude</label>
              <input
                type="text"
                name="longitute"
                value={formData.longitute}
                onChange={handleChange}
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "6px", 
                  border: "1px solid #e2e8f0", 
                  outline: "none" 
                }}
              />
            </div>
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

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#475569", fontWeight: "500" }}>Gambar Denah Tanah</label>
            <input
              type="text"
              name="gambarDenahTanah"
              value={formData.gambarDenahTanah}
              onChange={handleChange}
              style={{ 
                width: "100%", 
                padding: "10px", 
                borderRadius: "6px", 
                border: "1px solid #e2e8f0", 
                outline: "none" 
              }}
              placeholder="URL gambar"
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

export default ObjekretribusiCreate;