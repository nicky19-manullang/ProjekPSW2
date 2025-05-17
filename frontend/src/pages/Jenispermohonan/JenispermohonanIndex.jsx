import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/jenis-permohonan";

function JenispermohonanIndex() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ show: false, type: "", message: "" });

  useEffect(() => {
    fetchAllData();
  }, []);

  const showModal = (type, message) => {
    setModal({ show: true, type, message });
    setTimeout(() => setModal({ show: false, type: "", message: "" }), 3000);
  };

  const fetchAllData = async () => {
    try {
      const res = await axios.get(Api_URL);
      setData(res.data);
    } catch (error) {
      showModal("error", "Gagal memuat data status");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`${Api_URL}/${id}`);
        showModal("success", "Data berhasil dihapus.");
        fetchAllData();
      } catch (error) {
        showModal("error", "Gagal menghapus data!");
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
          backgroundColor: "#1d4ed8",
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
        <thead style={{ backgroundColor: "#1d4ed8", color: "white" }}>
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

      {modal.show && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: "white",
            padding: 30,
            borderRadius: 10,
            textAlign: "center",
            maxWidth: 400
          }}>
            <div style={{ fontSize: 50, color: modal.type === "success" ? "#16a34a" : "#dc2626" }}>
              {modal.type === "success" ? "✔️" : "❌"}
            </div>
            <h2 style={{ color: "#1f2937", marginBottom: 10 }}>{modal.type === "success" ? "Sukses" : "Error"}</h2>
            <p style={{ color: "#4b5563", marginBottom: 20 }}>{modal.message}</p>
            <button
              onClick={() => setModal({ show: false, type: "", message: "" })}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6366f1",
                color: "white",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JenispermohonanIndex;
