import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-permohonan";

function JenispermohonanEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    jenis_permohonan: "",
    parent_id: "",
    keterangan: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataById();
  }, [id]);

  const fetchDataById = async () => {
    try {
      const res = await axios.get(Api_URL);
      const dataItem = res.data.find(item => item.id === parseInt(id));
      if (dataItem) {
        setFormData({
          id: dataItem.id,
          jenis_permohonan: dataItem.jenis_permohonan,
          parent_id: dataItem.parent_id || "",
          keterangan: dataItem.keterangan || ""
        });
      } else {
        alert("Data dengan ID tersebut tidak ditemukan.");
        navigate("/Jenispermohonan-index");
      }
    } catch (error) {
      alert("Gagal mengambil data untuk diedit.");
      navigate("/Jenispermohonan-index");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        jenis_permohonan: formData.jenis_permohonan,
        parent_id: formData.parent_id ? parseInt(formData.parent_id) : null,
        keterangan: formData.keterangan,
      };
      await axios.put(`${Api_URL}/${id}`, dataToSend, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Data berhasil diperbarui!");
      navigate("/Jenispermohonan-index");
    } catch (error) {
      alert(`Gagal memperbarui data! ${error.response?.data?.message || ""}`);
    }
  };

  if (loading) {
    return <p className="loading">Memuat data...</p>;
  }

  return (
    <div className="edit-container">
      <h1 className="edit-title">Edit Jenis Permohonan</h1>
      <form onSubmit={handleSubmit} className="edit-form">
        <label>ID</label>
        <input type="text" name="id" value={formData.id} readOnly />

        <label>Jenis Permohonan</label>
        <input
          type="text"
          name="jenis_permohonan"
          value={formData.jenis_permohonan}
          onChange={handleChange}
          placeholder="Masukkan jenis permohonan"
          required
        />

        <label>Parent ID</label>
        <input
          type="text"
          name="parent_id"
          value={formData.parent_id}
          onChange={handleChange}
          placeholder="Masukkan parent ID (opsional)"
        />

        <label>Keterangan</label>
        <textarea
          name="keterangan"
          value={formData.keterangan}
          onChange={handleChange}
          placeholder="Masukkan keterangan"
          rows={5}
        />

        <div className="button-group">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate("/Jenispermohonan-index")}
          >
            Batal
          </button>
          <button type="submit" className="btn-save">
            Simpan Perubahan
          </button>
        </div>
      </form>

      <style>{`
        .edit-container {
          max-width: 720px;
          margin: 48px auto;
          padding: 24px 32px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          font-family: 'Poppins', sans-serif;
          color: #334155;
        }
        .edit-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
          text-align: center;
          color: #1e293b;
        }
        .edit-form label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 15px;
          color: #475569;
          margin-top: 20px;
        }
        .edit-form input[type="text"],
        .edit-form textarea {
          width: 100%;
          padding: 12px 16px;
          font-size: 15px;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          color: #334155;
          outline-offset: 2px;
          transition: border-color 0.3s ease;
        }
        .edit-form input[type="text"]:focus,
        .edit-form textarea:focus {
          border-color: #2563eb;
          outline: none;
        }
        textarea {
          resize: vertical;
        }
        .button-group {
          margin-top: 32px;
          display: flex;
          justify-content: flex-end;
          gap: 16px;
        }
        .btn-cancel {
          background: #e2e8f0;
          border: none;
          padding: 12px 28px;
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn-cancel:hover {
          background: #cbd5e1;
        }
        .btn-save {
          background: #2563eb;
          border: none;
          padding: 12px 28px;
          font-size: 15px;
          font-weight: 600;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn-save:hover {
          background: #1d4ed8;
        }
        .loading {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          text-align: center;
          margin-top: 80px;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}

export default JenispermohonanEdit;
