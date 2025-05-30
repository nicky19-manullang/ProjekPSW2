import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Swal from 'sweetalert2';

const Api_URL = "http://127.0.0.1:8000/api/v1/wajib-retribusi";

function WajibretribusiIndex() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(Api_URL);
      setData(response.data.data); // Pastikan response.data.data sesuai struktur Laravel
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${Api_URL}/${id}`);
          Swal.fire(
            'Terhapus!',
            'Data berhasil dihapus.',
            'success'
          );
          fetchData();
        } catch (error) {
          Swal.fire(
            'Error!',
            'Terjadi kesalahan saat menghapus data.',
            'error'
          );
          console.error('Error deleting data:', error);
        }
      }
    });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Wajib Retribusi</h1>
        <button 
          onClick={() => navigate("/wajib-retribusi-create")}
          style={{ backgroundColor: "#4361ee", color: "white", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
        >
          Tambah Data
        </button>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", overflow: "hidden" }}>
        {/* Table Header */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", padding: "15px 20px", backgroundColor: "#4361ee", color: "white", fontWeight: "500" }}>
          <div>No</div>
          <div>ID Jenis</div>
          <div>Nama</div>
          <div>Pekerjaan</div>
          <div>Email</div>
          <div>No. HP</div>
          <div>No. WA</div>
          <div>NIK</div>
          <div>Alamat</div>
          <div>File Foto</div>
          <div>ID Wajib</div>
          <div>Aksi</div>
        </div>

        {/* Table Body */}
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div 
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                padding: "12px 20px",
                borderBottom: "1px solid #e2e8f0",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc"
              }}
            >
              <div>{indexOfFirstItem + index + 1}</div>
              <div>{item.id_jenis_retribusi}</div>
              <div>{item.nama}</div>
              <div>{item.pekerjaan}</div>
              <div>{item.email}</div>
              <div>{item.no_hp}</div>
              <div>{item.no_wa}</div>
              <div>{item.nik}</div>
              <div>{item.alamat}</div>
              <div>{item.file_foto ? "✅" : "❌"}</div>
              <div>{item.id_wajib_retribusi}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button 
                  onClick={() => navigate(`/wajib-retribusi-edit/${item.id}`)}
                  style={{ color: "#3b82f6", background: "none", border: "none", cursor: "pointer" }}
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  style={{ color: "#ef4444", background: "none", border: "none", cursor: "pointer" }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: "20px", textAlign: "center", color: "#64748b" }}>
            Tidak ada data
          </div>
        )}

        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ color: "#64748b" }}>
            Menampilkan {currentItems.length} dari {data.length} data
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{ padding: "5px 10px", border: "1px solid #e2e8f0", borderRadius: "4px", cursor: "pointer", backgroundColor: currentPage === 1 ? "#f1f5f9" : "white" }}
            >
              <FaChevronLeft />
            </button>
            <span style={{ padding: "5px 10px" }}>
              Halaman {currentPage} dari {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{ padding: "5px 10px", border: "1px solid #e2e8f0", borderRadius: "4px", cursor: "pointer", backgroundColor: currentPage === totalPages ? "#f1f5f9" : "white" }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WajibretribusiIndex;