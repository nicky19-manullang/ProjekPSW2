import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Api_URL = "http://127.0.0.1:8000/api/v1/objek-retribusi";

function ObjekretribusiEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idLokasiObjekRetribusi: "",
    idJenisObjekRetribusi: "",
    kodeObjekRetribusi: "",
    noBangunan: "",
    jumlahLantai: "",
    objekRetribusi: "",
    panjangTanah: "",
    lebarTanah: "",
    luasTanah: "",
    panjangBangunan: "",
    lebarBangunan: "",
    luasBangunan: "",
    alamat: "",
    latitute: "",
    longitute: "",
    keterangan: "",
    gambarDenahTanah: ""
  });
  const [errors, setErrors] = useState({});
  const [lokasiOptions, setLokasiOptions] = useState([]);
  const [jenisOptions, setJenisOptions] = useState([]);

  useEffect(() => {
    // Fetch options and current data
    const fetchData = async () => {
      try {
        const [lokasiRes, jenisRes, currentData] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/v1/lokasi-objek-retribusi"),
          axios.get("http://127.0.0.1:8000/api/v1/jenis-objek-retribusi"),
          axios.get(`${Api_URL}/${id}`)
        ]);
        
        setLokasiOptions(lokasiRes.data.data);
        setJenisOptions(jenisRes.data.data);
        
        // Set form data from current data
        setFormData(currentData.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/Objekretribusi-index');
      }
    };

    fetchData();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${Api_URL}/${id}`, formData);
      if (response.data.status === 'success') {
        navigate('/Objekretribusi-index');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error updating data:', error);
        alert('Gagal mengupdate data: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "20px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b" }}>Edit Objek Retribusi</h1>
          <button 
            onClick={() => navigate("/Objekretribusi-index")}
            style={{ backgroundColor: "#e2e8f0", color: "#64748b", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Kembali
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Same form structure as Create component */}
          {/* ... (same form fields as Create component) ... */}
          
          <button 
            type="submit"
            style={{ width: "100%", backgroundColor: "#4361ee", color: "white", padding: "12px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "500" }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default ObjekretribusiEdit;