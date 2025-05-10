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
        }}>Lokasi Objek</h1>
        <button 
          onClick={() => navigate("/Lokasi-objek-create")}
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
          Tambah Lokasi Objek
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
          gridTemplateColumns: "repeat(4, 1fr)",
          padding: "15px 20px",
          backgroundColor: "#4361ee",
          color: "white",
          fontWeight: "500"
        }}>
          <div>No</div>
          <div>ID Lokasi Objek</div>
          <div>Lokasi Objek</div>
          <div>Keterangan</div>
        </div>

        {/* Table Body */}
        {currentUsers.length > 0 ? (
          currentUsers.map((user, index) => (
            <div 
              key={user.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                padding: "12px 20px",
                borderBottom: "1px solid #e2e8f0",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc"
              }}
            >
              <div>{indexOfFirstItem + index + 1}</div>
              <div>{user.lokasi_objek_id}</div>
              <div>{user.lokasi_objek}</div>
              <div>{user.keterangan}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button 
                  onClick={() => navigate(`/users/edit/${user.id}`)}
                  style={{
                    color: "#3b82f6",
                    background: "none",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDelete(user.id)}
                  style={{
                    color: "#ef4444",
                    background: "none",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ 
            padding: "20px",
            textAlign: "center",
            color: "#64748b"
          }}>
            Tidak ada data lokasi objek
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
            Menampilkan {currentUsers.length} dari {users.length} lokasi objek
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