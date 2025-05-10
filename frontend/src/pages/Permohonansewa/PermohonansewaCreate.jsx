// UserIndex.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Api_URL = "http://127.0.0.1:8000/api/users";

function WajibretribusiIndex() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(Api_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Hapus user ini?")) {
      try {
        await axios.delete(`${Api_URL}/${id}`);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div style={{ 
      fontFamily: "'Poppins', sans-serif",
      padding: "20px",
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h1 style={{ 
          fontSize: "24px",
          fontWeight: "600",
          color: "#1e293b"
        }}>Wajib Retribusi</h1>
        <button 
          onClick={() => navigate("/Wajib-retribusi-create")}
          style={{
            backgroundColor: "#4361ee",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          Tambah Wajib Retribusi
        </button>
      </div>

      {/* Table */}
      <div style={{ 
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        overflow: "hidden"
      }}>
        {/* Table Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          padding: "15px 20px",
          backgroundColor: "#4361ee",
          color: "white",
          fontWeight: "500"
        }}>
          <div>No</div>
          <div>Id Jenis</div>
          <div>Id Peruntukan</div>
          <div>Id Objek Retribusi</div>
          <div>Id Wajib Retribusi</div>
          <div>Pemohon Sewa</div>
          <div>Jenis Permohonan</div>
          <div>Lama Sewa</div>
          <div>Nomor Surat Permohonan</div>
          <div>Status</div>
        </div>

        {/* Table Body */}
        {currentUsers.length > 0 ? (
          currentUsers.map((user, index) => (
            <div 
              key={user.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(10, 1fr)",
                padding: "12px 20px",
                borderBottom: "1px solid #e2e8f0",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc"
              }}
            >
              <div>{indexOfFirstItem + index + 1}</div>
              <div>{user.jenis_id}</div>
              <div>{user.peruntukan_id}</div>
              <div>{user.objek_retribusi_id}</div>
              <div>{user.wajib_retribusi_id}</div>
              <div>{user.pemohon_sewa}</div>
              <div>{user.jenis_permohonan}</div>
              <div>{user.lama_sewa}</div>
              <div>{user.nomor_surat_permohonan}</div>
              <div>{user.status}</div>
            </div>
          ))
        ) : (
          <div style={{ 
            padding: "20px",
            textAlign: "center",
            color: "#64748b"
          }}>
            Tidak ada data permohonan sewa
          </div>
        )}

        {/* Pagination */}
        <div style={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          borderTop: "1px solid #e2e8f0"
        }}>
          <div style={{ color: "#64748b" }}>
            Menampilkan {currentUsers.length} dari {users.length} permohonan sewa
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                padding: "5px 10px",
                border: "1px solid #e2e8f0",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: currentPage === 1 ? "#f1f5f9" : "white"
              }}
            >
              <FaChevronLeft />
            </button>
            <span style={{ padding: "5px 10px" }}>
              Halaman {currentPage} dari {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                padding: "5px 10px",
                border: "1px solid #e2e8f0",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: currentPage === totalPages ? "#f1f5f9" : "white"
              }}
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