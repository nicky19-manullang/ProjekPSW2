// JenisIndex.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Tambah ini
import axios from "axios";
import "../../styles/Jenis.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Api_URL = "http://127.0.0.1:8000/api/jenis-status";

function JenisIndex() {
  const [jenis, setJenis] = useState([]);
  const navigate = useNavigate(); // untuk navigasi antar halaman

  useEffect(() => {
    fetchJenis();
  }, []);

  const fetchJenis = async () => {
    try {
      const response = await axios.get(Api_URL);
      setJenis(response.data);
    } catch (error) {
      console.error('Error fetching jenis status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`${Api_URL}/${id}`);
        alert("Data berhasil dihapus!");
        fetchJenis();
      } catch (error) {
        console.error('Error deleting jenis status:', error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/jenis-edit/${id}`);
  };

  const handleTambah = () => {
    navigate('/jenis-create');
  };

  return (
    <div className="jenis-container">
      <div className="jenis-header">
        <h1>Data Jenis Status</h1>
        <button className="add-new-button" onClick={handleTambah}>Tambah Baru</button>
      </div>

      <div className="table-responsive">
        <table className="styled-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Jenis Status</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jenis.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{index + 1}</td>
                <td>{item.jenis_status}</td>
                <td>{item.keterangan}</td>
                <td className="actions-column">
                  <button className="edit-icon" onClick={() => handleEdit(item.id)}>
                    <FaEdit />
                  </button>
                  <button className="delete-icon" onClick={() => handleDelete(item.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {jenis.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JenisIndex;
