import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Api_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaIndex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(Api_URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Gagal mengambil data");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;

    try {
      await axios.delete(`${Api_URL}/${id}`);
      alert("Data berhasil dihapus");
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Gagal menghapus data");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "'Poppins', sans-serif" }}>
      <h1>Data Peruntukan Sewa</h1>
      <Link
        to="/Peruntukansewa/create"
        style={{
          display: "inline-block",
          marginBottom: 20,
          backgroundColor: "#4361ee",
          color: "white",
          padding: "10px 20px",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Tambah Data
      </Link>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 16,
        }}
      >
        <thead style={{ backgroundColor: "#4361ee", color: "white" }}>
          <tr>
            <th style={{ padding: 10, border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: 10, border: "1px solid #ddd" }}>Jenis Kegiatan</th>
            <th style={{ padding: 10, border: "1px solid #ddd" }}>Peruntukan Sewa</th>
            <th style={{ padding: 10, border: "1px solid #ddd" }}>Keterangan</th>
            <th style={{ padding: 10, border: "1px solid #ddd" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: 20 }}>
                Tidak ada data
              </td>
            </tr>
          )}
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>{item.id}</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>{item.jenisKegiatan}</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>{item.peruntukanSewa}</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>{item.keterangan}</td>
              <td style={{ padding: 10, border: "1px solid #ddd" }}>
                <Link
                  to={`/peruntukansewa/edit/${item.id}`}
                  style={{
                    marginRight: 10,
                    color: "#4361ee",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    backgroundColor: "#ee4343",
                    border: "none",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeruntukansewaIndex;
