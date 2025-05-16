import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1/permohonan-sewa";

const PermohonanSewaIndex = () => {
  const [permohonanSewa, setPermohonanSewa] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPermohonanSewa();
  }, []);

  const fetchPermohonanSewa = async () => {
    try {
      const response = await axios.get(API_URL);
      setPermohonanSewa(response.data);
    } catch (error) {
      alert("Gagal mengambil data permohonan sewa");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("Data berhasil dihapus");
        fetchPermohonanSewa();
      } catch (error) {
        alert("Gagal menghapus data");
        console.error(error);
      }
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Poppins', sans-serif" }}>
      <h2>Data Permohonan Sewa</h2>
      <button
        onClick={() => navigate("/permohonan-sewa-create")}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        Tambah Data
      </button>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID Jenis Permohonan</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nomor Surat Permohonan</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tanggal Pengajuan</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID Wajib Retribusi</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID Objek Retribusi</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID Jenis Jangka Waktu</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Lama Sewa</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID Peruntukan Sewa</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID Status</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Created At</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Updated At</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {permohonanSewa.length === 0 ? (
            <tr>
              <td colSpan="13" style={{ padding: "10px", textAlign: "center" }}>
                Data tidak ditemukan
              </td>
            </tr>
          ) : (
            permohonanSewa.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.id}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.idJenisPermohonan ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.nomorSuratPermohonan ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.tanggalPengajuan ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.idWajibRetribusi ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.idObjekRetribusi ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.idJenisJangkaWaktu ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.lamaSewa ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.idPeruntukanSewa ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.idStatus ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.created_at ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.updated_at ?? "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <button
                    onClick={() => navigate(`/permohonan-sewa-edit/${item.id}`)}
                    style={{
                      backgroundColor: "#2196f3",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
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
};

export default PermohonanSewaIndex;
