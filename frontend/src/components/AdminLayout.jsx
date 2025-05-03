import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Status sidebar
  const navigate = useNavigate();

  const handleLogout = () => {
    // Menghapus status login dari localStorage
    localStorage.removeItem("loggedIn");
    
    // Mengarahkan pengguna kembali ke halaman login
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle status sidebar
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a 
              className="nav-link" 
              data-widget="pushmenu" 
              href="#" 
              role="button"
              onClick={toggleSidebar} 
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>

        {/* Tombol Logout */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${sidebarOpen ? '' : 'sidebar-mini'}`}>
        {/*<a href="/" className="brand-link">
          <span className="brand-text font-weight-light"><p><b>TAPA</b>TUPA</p></span>
        </a>*/}
        <h3 style={{ color: 'white', textAlign: 'center' }}>
          <b>TAPA</b>TUPA
        </h3>

        <div className={`sidebar ${sidebarOpen ? '' : 'sidebar-collapse'}`}>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview">
              <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-chart-line"></i>
                  <p>Manajemen Tanah</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/jenis-index" className="nav-link">
                <i className="nav-icon fas fa-file-alt"></i> 
                <p>JenisStatus</p>
                </a>
              </li>

              {/* Navigasi lainnya */}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="content-wrapper">
        {/* Content goes here */}
        {children}
      </div>
    </div>
  );
}
