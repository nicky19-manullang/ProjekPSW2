// JenisEdit.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/Jenis2.css";


const Api_URL = "http://127.0.0.1:8000/api/peruntukan-sewa";

function JenisEdit() {
  const [jenisStatus, setJenisStatus] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // ambil id dari URL

  useEffect(() => {
    fetchJenisById();
  }, []);

  const fetchJenisById = async () => {
    try {
      const response = await axios.get(`${Api_URL}/${id}`);
      setJenisStatus(response.data.jenis_status);
      setKeterangan(response.data.keterangan);
    } catch (error) {
      console.error('Error fetching jenis status:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, {
        jenis_status: jenisStatus,
        keterangan: keterangan,
      });
      alert("Data berhasil diupdate!");
      navigate('/jenis');
    } catch (error) {
      console.error('Error updating jenis status:', error);
    }
  };

  return (
    <div className="form-wrapper">
      <h1>Edit Jenis Status</h1>
      <form className="form-container" onSubmit={handleUpdate}>
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
          <button className="submit-button" type="submit">Update</button>
          <button className="cancel-button" type="button" onClick={() => navigate('/jenis')}>Batal</button>
        </div>
      </form>
    </div>
  );
}

export default JenisEdit;
