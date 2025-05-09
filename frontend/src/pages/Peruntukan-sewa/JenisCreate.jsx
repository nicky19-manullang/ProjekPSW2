// JenisCreate.jsx
import React, { useState } from "react";
import axios from "axios";
import "../../styles/Jenis1.css";

const Api_URL = "http://127.0.0.1:8000/api/jenis-status";

function JenisCreate({ fetchJenis }) {
  const [jenisStatus, setJenisStatus] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(Api_URL, {
        jenis_status: jenisStatus,
        keterangan: keterangan,
      });
      alert("Data berhasil disimpan!");
      setJenisStatus('');
      setKeterangan('');
      fetchJenis();
    } catch (error) {
      console.error('Error saving jenis status:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Jenis Status</label>
          <input
            className="input-field"
            type="text"
            placeholder="Masukkan Jenis Status"
            value={jenisStatus}
            onChange={(e) => setJenisStatus(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Keterangan</label>
          <input
            className="input-field"
            type="text"
            placeholder="Masukkan Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
          />
        </div>

        <div className="button-wrapper">
          <button className="submit-button" type="submit">Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default JenisCreate;
