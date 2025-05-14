import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/jenis-status";

function JenisstatusEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jenisStatus, setJenisStatus] = useState("");
  const [keterangan, setKeterangan] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Api_URL}/${id}`);
      const data = response.data;
      setJenisStatus(data.jenis_status);
      setKeterangan(data.keterangan);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${Api_URL}/${id}`, {
        jenis_status: jenisStatus,
        keterangan: keterangan,
      });
      navigate("/jenis-status");
    } catch (error) {
      console.error("Gagal mengupdate data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Edit Jenis Status</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label>Jenis Status</label>
          <input
            type="text"
            value={jenisStatus}
            onChange={(e) => setJenisStatus(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Keterangan</label>
          <input
            type="text"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: "#f59e0b", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
          Update
        </button>
      </form>
    </div>
  );
}

export default JenisstatusEdit;
