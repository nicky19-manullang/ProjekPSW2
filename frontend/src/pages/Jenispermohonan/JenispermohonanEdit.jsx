import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaChevronLeft } from "react-icons/fa";

const Api_URL = "http://127.0.0.1:8000/api/jenis-permohonan";

function EditJenisPermohonan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jenis_permohonan: "",
    parent_id: "",
    keterangan: ""
  });

  // Fetch data yang mau diedit
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_URL}/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, formData);
      alert("Data berhasil diupdate!");
      navigate("/jenis-permohonan");
    } catch (error) {
      console.error('Error updating data:', error);
      alert("Gagal update data!");
    }
  };

  return (
    <div style={{ 
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#4361ee"
          }}
        >
          <FaChevronLeft /> Kembali
        </button>
        <h1 style={{ 
          fontSize: "24px",
          fontWeight: "600",
          color: "#1e293b"
        }}>Edit Jenis Permohonan</h1>
        <div style={{ width: "100px" }}></div> {/* Spacer */}
      </div>

      {/* Form */}
      <div style={{ 
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        padding: "25px",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        <form onSubmit={handleSubmit}>
          {/* Jenis Permohonan */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Jenis Permohonan</label>
            <input
              type="text"
              name="jenis_permohonan"
              value={formData.jenis_permohonan}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Parent ID */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Parent ID</label>
            <input
              type="text"
              name="parent_id"
              value={formData.parent_id}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px"
              }}
            />
          </div>

          {/* Keterangan */}
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#334155"
            }}>Keterangan</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "14px",
                minHeight: "100px",
                resize: "vertical"
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ 
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px"
          }}>
            <button
              type="button"
              onClick={() => navigate("/jenis-permohonan")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f1f5f9",
                color: "#64748b",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500"
              }}
            >
              Batal
            </button>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4361ee",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500"
              }}
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditJenisPermohonan;