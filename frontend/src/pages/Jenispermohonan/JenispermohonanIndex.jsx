import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-permohonan";

function JenispermohonanIndex() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const res = await axios.get(Api_URL);
      setData(res.data);
    } catch (error) {
      alert("Gagal memuat data!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`${Api_URL}/${id}`);
        alert("Data berhasil dihapus.");
        fetchAllData();
      } catch (error) {
        alert("Gagal menghapus data!");
        console.error(error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: 40, backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, color: "#1e293b", marginBottom: 30 }}>
        Daftar Jenis Permohonan
      </h1>

      <button
        onClick={() => navigate("/jenis-permohonan/create")}
        style={{
          padding: "12px 20px",
          backgroundColor: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 16,
          marginBottom: 20
        }}
      >
        + Tambah Baru
      </button>

      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", borderRadius: 12, overflow: "hidden" }}>
        <thead style={{ backgroundColor: "#22c55e", color: "white" }}>
          <tr>
            <th style={{ padding: 12, textAlign: "left" }}>ID</th>
            <th style={{ padding: 12, textAlign: "left" }}>Jenis Permohonan</th>
            <th style={{ padding: 12, textAlign: "left" }}>Parent ID</th>
            <th style={{ padding: 12, textAlign: "left" }}>Keterangan</th>
            <th style={{ padding: 12, textAlign: "center" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: 20 }}>
                Data tidak ditemukan
              </td>
            </tr>
          ) : (
            data.map(item => (
              <tr key={item.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                <td style={{ padding: 12 }}>{item.id}</td>
                <td style={{ padding: 12 }}>{item.jenis_permohonan}</td>
                <td style={{ padding: 12 }}>{item.parent_id || "-"}</td>
                <td style={{ padding: 12 }}>{item.keterangan || "-"}</td>
                <td style={{ padding: 12, textAlign: "center" }}>
                  <Link to={`/jenis-permohonan/edit/${item.id}`} style={{ marginRight: 10, color: "#2563eb", fontWeight: 600, cursor: "pointer" }}>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#dc2626",
                      cursor: "pointer",
                      fontWeight: 600
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default JenispermohonanIndex;
