// JenisCreate.jsx
import React, { useState } from "react";
import axios from "axios";
import "../../styles/Jenis1.css";

const Api_URL = "http://127.0.0.1:8000/api/jenis-status";

function JenisCreate({ fetchJenis }) {
  const [formData, setFormData] = useState({
    jenisStatus: '',
    keterangan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, {
        jenis_status: formData.jenisStatus,
        keterangan: formData.keterangan,
      });
      alert("Data berhasil disimpan!");
      setFormData({
        jenisStatus: '',
        keterangan: ''
      });
      fetchJenis();
    } catch (error) {
      alert('Gagal menyimpan data: ' + error.message);
      console.error('Error saving jenis status:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Tambah Jenis Status</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Jenis Status</label>
          <input
            className="input-field"
            type="text"
            name="jenisStatus"
            placeholder="Masukkan Jenis Status"
            value={formData.jenisStatus}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Keterangan</label>
          <textarea
            className="input-field"
            name="keterangan"
            placeholder="Masukkan Keterangan"
            value={formData.keterangan}
            onChange={handleChange}
            required
            rows="3"
          />
        </div>

        <div className="button-wrapper">
          <button className="submit-button" type="submit">
            Simpan
          </button>
          <button 
            className="reset-button" 
            type="button" 
            onClick={() => setFormData({ jenisStatus: '', keterangan: '' })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default JenisCreate;