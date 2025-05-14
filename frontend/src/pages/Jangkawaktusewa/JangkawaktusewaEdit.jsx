import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Api_URL = "http://127.0.0.1:8000/api/jangka-waktu-sewa";

function JangkaWaktuEdit() {
  const [jangkaWaktu, setJangkaWaktu] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Untuk mengambil id dari URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_URL}/${id}`);
        setJangkaWaktu(response.data.jangka_waktu);
        setKeterangan(response.data.keterangan);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${Api_URL}/${id}`, {
        jangka_waktu: jangkaWaktu,
        keterangan: keterangan,
      });

      if (response.status === 200) {
        navigate("/jangka-waktu"); // Navigasi setelah berhasil mengedit
      }
    } catch (error) {
      console.error('Gagal mengedit data:', error);
    }
  };

  return (
    <div>
      <h1>Edit Jangka Waktu Sewa</h1>
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
        <button type="submit">Perbarui</button>
      </form>
    </div>
  );
}

export default JangkaWaktuEdit;
