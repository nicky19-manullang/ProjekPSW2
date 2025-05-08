import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Admin.css";// nanti lo bisa taruh style khusus di sini

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [openPemohon, setOpenPemohon] = useState(false);
  const [openSewa, setOpenSewa] = useState(false);
  const [openWaktu, setOpenWaktu] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  

  return (
    <div className="tt-wrapper d-flex">
      {/* Sidebar */}
      <aside className={`tt-sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="tt-sidebar-header">
          <img src="/images/logo.jpg" alt="Logo" className="tt-logo" />
          <h5 className="tt-title">T A P A T U P A</h5>
        </div>
        <nav className="tt-nav">
  <ul>
    <li><a href="/dashboard"><i className="fas fa-home"></i> Dashboard</a></li>

    {/* Pemohon */}
    <li>
      <div className="tt-dropdown-toggle" onClick={() => setOpenPemohon(!openPemohon)}>
        <i className="fas fa-users"></i> Pemohon
        <i className={`fas fa-chevron-${openPemohon ? 'down' : 'right'} tt-arrow`}></i>
      </div>
      {openPemohon && (
        <ul className="tt-dropdown">
          <li><a href="/pemohon">Data Pemohon</a></li>
          <li><a href="/pemohon/tambah">Tambah Pemohon</a></li>
        </ul>
      )}
    </li>

    {/* Manajemen Sewa */}
    <li>
      <div className="tt-dropdown-toggle" onClick={() => setOpenSewa(!openSewa)}>
        <i className="fas fa-clipboard-list"></i> Manajemen Sewa
        <i className={`fas fa-chevron-${openSewa ? 'down' : 'right'} tt-arrow`}></i>
      </div>
      {openSewa && (
        <ul className="tt-dropdown">
          <li><a href="/sewa">Data Sewa</a></li>
          <li><a href="/sewa/tambah">Tambah Sewa</a></li>
        </ul>
      )}
    </li>

    {/* Waktu Permohonan */}
    <li>
      <div className="tt-dropdown-toggle" onClick={() => setOpenWaktu(!openWaktu)}>
        <i className="fas fa-clock"></i> Waktu Permohonan
        <i className={`fas fa-chevron-${openWaktu ? 'down' : 'right'} tt-arrow`}></i>
      </div>
      {openWaktu && (
        <ul className="tt-dropdown">
          <li><a href="/waktu">Lihat Waktu</a></li>
          <li><a href="/waktu/tambah">Tambah Waktu</a></li>
        </ul>
      )}
    </li>

    {/* Lainnya */}
    <li><a href="/status"><i className="fas fa-edit"></i> Manajemen Status</a></li>
    <li><a href="/objek"><i className="fas fa-map"></i> Objek</a></li>
  </ul>
</nav>

      </aside>

      {/* Content Area */}
      <div className="tt-content">
        <div className="tt-navbar">
          <button className="tt-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
          <h4 className="tt-page-title"><i className="fas fa-home"></i> Dashboard</h4>
          <div className="tt-admin">
            <i className="fas fa-user"></i> Admin Tapatupa
          </div>
        </div>
        <div className="tt-main-content">
          {children}
        </div>
        <footer className="tt-footer">
          <div className="tt-footer-content">
            <p>&copy; 2024 Tapatupa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
