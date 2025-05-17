import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash, FaChevronLeft, FaChevronRight, FaPlus, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

const API_URL = "http://127.0.0.1:8000/api/v1/peruntukan-sewa";

function PeruntukansewaIndex() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API_URL);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Gagal memuat data peruntukan sewa',
      });
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
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
          await axios.delete(`${API_URL}/${id}`);
          Swal.fire(
            'Deleted!',
            'Data berhasil dihapus.',
            'success'
          );
          fetchData();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Gagal menghapus data',
          });
        }
      }
    });
  };

  const filteredData = data.filter(item =>
    item.jenis_kegiatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.peruntukan_sewa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.keterangan && item.keterangan.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Daftar Peruntukan Sewa</h1>
        <button 
          onClick={() => navigate("/Peruntukansewa/create")}
          style={{ 
            backgroundColor: "#4361ee", 
            color: "white", 
            padding: "8px 16px", 
            borderRadius: "6px", 
            border: "none", 
            cursor: "pointer", 
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <FaPlus /> Tambah Data
        </button>
      </div>

      <div style={{ marginBottom: "20px", position: "relative" }}>
        <FaSearch style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#64748b"
        }} />
        <input
          type="text"
          placeholder="Cari jenis kegiatan, peruntukan sewa, atau keterangan..."
          style={{
            width: "100%",
            padding: "10px 15px 10px 40px",
            borderRadius: "6px",
            border: "1px solid #e2e8f0",
            fontSize: "14px"
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", overflow: "hidden" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "50px 1fr 1fr 1fr 100px", 
          padding: "15px 20px", 
          backgroundColor: "#4361ee", 
          color: "white", 
          fontWeight: "500",
          alignItems: "center"
        }}>
          <div>No</div>
          <div>Jenis Kegiatan</div>
          <div>Peruntukan Sewa</div>
          <div>Keterangan</div>
          <div style={{ textAlign: "center" }}>Aksi</div>
        </div>

        {isLoading && (
          <div style={{ padding: "20px", textAlign: "center", color: "#64748b" }}>
            Memuat data...
          </div>
        )}

        {!isLoading && currentItems.length === 0 && (
          <div style={{ padding: "20px", textAlign: "center", color: "#64748b" }}>
            {searchTerm ? "Tidak ada hasil pencarian" : "Tidak ada data"}
          </div>
        )}

        {!isLoading && currentItems.length > 0 && currentItems.map((item, index) => (
          <div 
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "50px 1fr 1fr 1fr 100px",
              padding: "12px 20px",
              borderBottom: "1px solid #e2e8f0",
              alignItems: "center",
              backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc"
            }}
          >
            <div>{indexOfFirstItem + index + 1}</div>
            <div>{item.jenis_kegiatan}</div>
            <div>{item.peruntukan_sewa}</div>
            <div>{item.keterangan || "-"}</div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button 
                onClick={() => navigate(`/Peruntukansewa/edit/${item.id}`)}
                style={{ 
                  color: "#3b82f6", 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer",
                  fontSize: "16px"
                }}
                title="Edit"
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => handleDelete(item.id)}
                style={{ 
                  color: "#ef4444", 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer",
                  fontSize: "16px"
                }}
                title="Hapus"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {!isLoading && filteredData.length > 0 && (
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "15px 20px", 
            borderTop: "1px solid #e2e8f0",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            <div style={{ color: "#64748b" }}>
              Menampilkan {Math.min(indexOfFirstItem + 1, filteredData.length)}-{Math.min(indexOfLastItem, filteredData.length)} dari {filteredData.length} data
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={{ 
                  padding: "5px 10px", 
                  border: "1px solid #e2e8f0", 
                  borderRadius: "4px", 
                  cursor: "pointer", 
                  backgroundColor: currentPage === 1 ? "#f1f5f9" : "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                <FaChevronLeft /> Prev
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
                  backgroundColor: currentPage === totalPages ? "#f1f5f9" : "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                Next <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PeruntukansewaIndex;