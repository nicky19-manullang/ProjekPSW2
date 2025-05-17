import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jenis_kegiatan: "",
    peruntukan_sewa: "",
    keterangan: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(API_URL, formData);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data peruntukan sewa berhasil ditambahkan',
      }).then(() => {
        navigate("/Peruntukansewa-index");
      });
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
        Swal.fire({
          icon: 'error',
          title: 'Validasi Gagal',
          text: 'Terdapat kesalahan pada input Anda',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Gagal menambahkan data: ' + (error.response?.data?.message || error.message),
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      fontFamily: "'Poppins', sans-serif", 
      padding: "20px", 
      backgroundColor: "#f8fafc", 
      minHeight: "100vh" 
    }}>
      <div style={{ 
        backgroundColor: "white", 
        borderRadius: "10px", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)", 
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "20px",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "15px"
        }}>
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Tambah Peruntukan Sewa</h1>
          <button 
            onClick={() => navigate("/Peruntukansewa-index")}
            style={{ 
              backgroundColor: "#e2e8f0", 
              color: "#64748b", 
              padding: "8px 16px", 
              borderRadius: "6px", 
              border: "none", 
              cursor: "pointer", 
              fontWeight: "500"
            }}
          >
            Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "8px", 
              fontWeight: "500", 
              color: "#334155" 
            }}>
              Jenis Kegiatan <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              name="jenis_kegiatan"
              value={formData.jenis_kegiatan}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                borderRadius: "6px",
                border: errors.jenis_kegiatan ? "1px solid #ef4444" : "1px solid #e2e8f0",
                fontSize: "14px"
              }}
              placeholder="Masukkan jenis kegiatan"
            />
            {errors.jenis_kegiatan && (
              <div style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px" }}>
                {errors.jenis_kegiatan[0]}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "8px", 
              fontWeight: "500", 
              color: "#334155" 
            }}>
              Peruntukan Sewa <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              name="peruntukan_sewa"
              value={formData.peruntukan_sewa}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                borderRadius: "6px",
                border: errors.peruntukan_sewa ? "1px solid #ef4444" : "1px solid #e2e8f0",
                fontSize: "14px"
              }}
              placeholder="Masukkan peruntukan sewa"
            />
            {errors.peruntukan_sewa && (
              <div style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px" }}>
                {errors.peruntukan_sewa[0]}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "8px", 
              fontWeight: "500", 
              color: "#334155" 
            }}>
              Keterangan
            </label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                borderRadius: "6px",
                border: errors.keterangan ? "1px solid #ef4444" : "1px solid #e2e8f0",
                fontSize: "14px",
                minHeight: "100px",
                resize: "vertical"
              }}
              placeholder="Masukkan keterangan (opsional)"
            />
            {errors.keterangan && (
              <div style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px" }}>
                {errors.keterangan[0]}
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <button
              type="button"
              onClick={() => navigate("/Peruntukansewa-index")}
              style={{ 
                backgroundColor: "#e2e8f0", 
                color: "#64748b", 
                padding: "10px 20px", 
                borderRadius: "6px", 
                border: "none", 
                cursor: "pointer", 
                fontWeight: "500"
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ 
                backgroundColor: "#4361ee", 
                color: "white", 
                padding: "10px 20px", 
                borderRadius: "6px", 
                border: "none", 
                cursor: "pointer", 
                fontWeight: "500",
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PeruntukansewaCreate;