import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Api_URL = "http://127.0.0.1:8000/api/jangka-waktu-sewa";

function JangkaWaktuCreate() {
  const [jangkaWaktu, setJangkaWaktu] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(Api_URL, {
        jangka_waktu: jangkaWaktu,
        keterangan: keterangan,
      });

      if (response.status === 201) {
        navigate("/jangka-waktu"); // Navigasi ke halaman daftar setelah berhasil menambah
      }
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
    }
  };

  return (
    <div>
      <h1>Tambah Jangka Waktu Sewa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Jangka Waktu</label>
          <input
            type="text"
            value={jangkaWaktu}
            onChange={(e) => setJangkaWaktu(e.target.value)}
          />
        </div>
        <div>
          <label>Keterangan</label>
          <input
            type="text"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default JangkaWaktuCreate;
