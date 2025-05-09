import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "../styles/Admin.css";// nanti lo bisa taruh style khusus di sini

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [openPemohon, setOpenPemohon] = useState(false);
  const [openSewa, setOpenSewa] = useState(false);
  const [openWaktu, setOpenWaktu] = useState(false);
  const [openStatus, setOpenStatus] = useState (false);
  const [openObjek, setOpenObjek] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  

  return (
    <div className="tt-wrapper d-flex" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <aside className={`tt-sidebar ${sidebarOpen ? 'open' : 'collapsed'}`} style={{ 
        backgroundColor: '#4682B4',
        color: 'white',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}>
        <div className="tt-sidebar-header" style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <img src="/images/logo.jpg" alt="Logo" className="tt-logo" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
          <h5 className="tt-title" style={{ margin: '10px 0', fontSize: '1.2rem', fontWeight: '600' }}>T A P A T U P A</h5>
        </div>
        <nav className="tt-nav" style={{ padding: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/dashboard" style={{ color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '8px', display: 'flex', alignItems: 'center', margin: '5px 0', transition: 'all 0.2s ease', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}><i className="fas fa-home"></i><span style={{ marginLeft: '10px' }}>Dashboard</span></a></li>

            {/* Pemohon */}
            <li>
              <div className="tt-dropdown-toggle" onClick={() => setOpenPemohon(!openPemohon)} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-users"></i>
                  <span style={{ marginLeft: '10px' }}>Pemohon</span>
                </div>
                <i className={`fas fa-chevron-${openPemohon ? 'down' : 'right'} tt-arrow`}></i>
              </div>
              {openPemohon && (
                <ul className="tt-dropdown" style={{ padding: '5px 0 5px 20px' }}>
                  <li><a href="/User-index" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>User</a></li>
                  <li><a href="/Wajib-retribusi-index" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Wajib Retribusi</a></li>
                </ul>
              )}
            </li>

            {/* Manajemen Sewa */}
            <li>
              <div className="tt-dropdown-toggle" onClick={() => setOpenSewa(!openSewa)} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-clipboard-list"></i>
                  <span style={{ marginLeft: '10px' }}>Manajemen Sewa</span>
                </div>
                <i className={`fas fa-chevron-${openSewa ? 'down' : 'right'} tt-arrow`}></i>
              </div>
              {openSewa && (
                <ul className="tt-dropdown" style={{ padding: '5px 0 5px 20px' }}>
                  <li><a href="/sewa" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Jenis Sewa</a></li>
                  <li><a href="/sewa/tambah" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Peruntukan Sewa</a></li>
                  <li><a href="/sewa/tambah" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Permohonan Sewa</a></li>
                </ul>
              )}
            </li>

            {/* Waktu Permohonan */}
            <li>
              <div className="tt-dropdown-toggle" onClick={() => setOpenWaktu(!openWaktu)} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-clock"></i>
                  <span style={{ marginLeft: '10px' }}>Waktu Permohonan</span>
                </div>
                <i className={`fas fa-chevron-${openWaktu ? 'down' : 'right'} tt-arrow`}></i>
              </div>
              {openWaktu && (
                <ul className="tt-dropdown" style={{ padding: '5px 0 5px 20px' }}>
                  <li><a href="/waktu" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Jangka Waktu Sewa</a></li>
                  <li><a href="/waktu/tambah" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Jenis Jangka Waktu</a></li>
                </ul>
              )}
            </li>

            {/* Status */}
            <li>
              <div className="tt-dropdown-toggle" onClick={() => setOpenStatus(!openStatus)} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-edit"></i>
                  <span style={{ marginLeft: '10px' }}>Manajemen Status</span>
                </div>
                <i className={`fas fa-chevron-${openStatus ? 'down' : 'right'} tt-arrow`}></i>
              </div>
              {openStatus && (
                <ul className="tt-dropdown" style={{ padding: '5px 0 5px 20px' }}>
                  <li><a href="/status" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Status</a></li>
                  <li><a href="/jenis-index" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Jenis Status</a></li>
                </ul>
              )}
            </li>

            {/* Objek */}
            <li>
              <div className="tt-dropdown-toggle" onClick={() => setOpenObjek(!openObjek)} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-map"></i>
                  <span style={{ marginLeft: '10px' }}>Objek</span>
                </div>
                <i className={`fas fa-chevron-${openObjek ? 'down' : 'right'} tt-arrow`}></i>
              </div>
              {openObjek && (
                <ul className="tt-dropdown" style={{ padding: '5px 0 5px 20px' }}>
                  <li><a href="/objek" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Jenis Objek</a></li>
                  <li><a href="/objek/tambah" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Lokasi Objek</a></li>
                  <li><a href="/objek" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Tarif Objek</a></li>
                  <li><a href="/objek/tambah" style={{ color: 'white', textDecoration: 'none', padding: '8px', display: 'block', borderRadius: '6px', ':hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>Objek Retribusi</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="tt-content" style={{ flex: 1, backgroundColor: 'white' }}>
        <div className="tt-navbar" style={{ 
          padding: '15px 30px',
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button className="tt-toggle" onClick={toggleSidebar} style={{
            border: 'none',
            backgroundColor: '#4682B4',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-bars"></i>
          </button>
          <h4 className="tt-page-title" style={{ margin: 0, color: '#000000' }}><i className="fas fa-home"></i> Dashboard</h4>
          <div className="tt-admin" style={{ 
            display: 'flex',
            alignItems: 'center',
            padding: '8px 15px',
            backgroundColor: '#4682B4',
            color: 'white',
            borderRadius: '8px'
          }}>
            <i className="fas fa-user" style={{ marginRight: '8px' }}></i> Admin Tapatupa
          </div>
        </div>
        <div className="tt-main-content" style={{ padding: '30px', minHeight: 'calc(100vh - 140px)' }}>
          {children}
        </div>
        <footer className="tt-footer" style={{ 
          borderTop: '1px solid #eee',
          padding: '15px 30px',
          backgroundColor: 'white'
        }}>
          <div className="tt-footer-content" style={{ textAlign: 'center', color: '#666' }}>
            <p style={{ margin: 0 }}>&copy; 2024 Tapatupa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}