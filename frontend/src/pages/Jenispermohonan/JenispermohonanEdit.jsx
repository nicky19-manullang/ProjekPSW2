import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-permohonan";

function JenispermohonanEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parent_id: "",
    jenis_permohonan: "",
    keterangan: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [parentOptions, setParentOptions] = useState([]);
  const [isLoadingOptions, setIsLoadingOptions] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch parent options
        const parentResponse = await axios.get(`${Api_URL}?is_parent=true`);
        setParentOptions(parentResponse.data.data);
        
        // Fetch current data
        const response = await axios.get(`${Api_URL}/${id}`);
        setFormData({
          parent_id: response.data.data.parent_id || "",
          jenis_permohonan: response.data.data.jenis_permohonan,
          keterangan: response.data.data.keterangan || "",
        });
        
        setIsLoading(false);
        setIsLoadingOptions(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsLoadingOptions(false);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Gagal memuat data jenis permohonan',
        }).then(() => {
          navigate("/Jenispermohonan-index");
        });
      }
    };

    fetchData();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
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
      const response = await axios.put(`${Api_URL}/${id}`, formData);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data jenis permohonan berhasil diperbarui',
      }).then(() => {
        navigate("/Jenispermohonan-index");
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
          text: 'Gagal memperbarui data: ' + (error.response?.data?.message || error.message),
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ 
        fontFamily: "'Poppins', sans-serif", 
        padding: "20px", 
        backgroundColor: "#f8fafc", 
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "15px" }}>Memuat data...</div>
        </div>
      </div>
    );
  }

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
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Edit Jenis Permohonan</h1>
          <button 
            onClick={() => navigate("/Jenispermohonan-index")}
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
              Parent Permohonan
            </label>
            {isLoadingOptions ? (
              <div style={{ padding: "10px", textAlign: "center", color: "#64748b" }}>
                Memuat data parent permohonan...
              </div>
            ) : (
              <select
                name="parent_id"
                value={formData.parent_id}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px 15px",
                  borderRadius: "6px",
                  border: errors.parent_id ? "1px solid #ef4444" : "1px solid #e2e8f0",
                  fontSize: "14px",
                  backgroundColor: "white"
                }}
              >
                <option value="">Pilih Parent Permohonan (Opsional)</option>
                {parentOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.jenis_permohonan}
                  </option>
                ))}
              </select>
            )}
            {errors.parent_id && (
              <div style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px" }}>
                {errors.parent_id[0]}
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
              Jenis Permohonan <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              name="jenis_permohonan"
              value={formData.jenis_permohonan}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                borderRadius: "6px",
                border: errors.jenis_permohonan ? "1px solid #ef4444" : "1px solid #e2e8f0",
                fontSize: "14px"
              }}
              placeholder="Masukkan jenis permohonan"
            />
            {errors.jenis_permohonan && (
              <div style={{ color: "#ef4444", fontSize: "12px", marginTop: "5px" }}>
                {errors.jenis_permohonan[0]}
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
              onClick={() => navigate("/Jenispermohonan-index")}
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
              disabled={isSubmitting || isLoadingOptions}
              style={{ 
                backgroundColor: "#4361ee", 
                color: "white", 
                padding: "10px 20px", 
                borderRadius: "6px", 
                border: "none", 
                cursor: "pointer", 
                fontWeight: "500",
                opacity: isSubmitting || isLoadingOptions ? 0.7 : 1
              }}
            >
              {isSubmitting ? "Memperbarui..." : "Perbarui"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JenispermohonanEdit;